// src/utils/razorpay.js

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_dummy_key';

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initiateRazorpayPayment = async ({
  amount,
  currency = 'INR',
  orderId,
  customerName,
  customerEmail,
  customerPhone,
  onSuccess,
  onFailure,
}) => {
  const scriptLoaded = await loadRazorpayScript();

  if (!scriptLoaded) {
    if (onFailure) {
      onFailure({ error: 'Failed to load Razorpay SDK' });
    }
    return;
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: Math.round(amount * 100),
    currency: currency,
    name: "Shraddha's Creation",
    description: 'Handmade Jewellery Purchase',
    order_id: orderId,
    prefill: {
      name: customerName,
      email: customerEmail,
      contact: customerPhone,
    },
    theme: {
      color: '#D4AF37',
    },
    handler: function (response) {
      if (onSuccess) {
        onSuccess({
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        });
      }
    },
    modal: {
      ondismiss: function () {
        if (onFailure) {
          onFailure({ error: 'Payment cancelled by user' });
        }
      },
    },
  };

  const razorpayInstance = new window.Razorpay(options);

  razorpayInstance.on('payment.failed', function (response) {
    if (onFailure) {
      onFailure({
        error: response.error.description,
        code: response.error.code,
        metadata: response.error.metadata,
      });
    }
  });

  razorpayInstance.open();
};

export const generateOrderId = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `order_${timestamp}_${random}`;
};

export const formatAmount = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

export const validatePaymentDetails = (details) => {
  const errors = {};

  if (!details.name || details.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!details.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!details.phone || !/^[6-9]\d{9}$/.test(details.phone)) {
    errors.phone = 'Please enter a valid 10-digit Indian phone number';
  }

  if (!details.address || details.address.trim().length < 10) {
    errors.address = 'Address must be at least 10 characters';
  }

  if (!details.pincode || !/^\d{6}$/.test(details.pincode)) {
    errors.pincode = 'Please enter a valid 6-digit pincode';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};