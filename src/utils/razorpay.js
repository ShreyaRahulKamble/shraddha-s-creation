const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initializeRazorpay = async () => {
  const res = await loadRazorpayScript();
  if (!res) {
    alert('Razorpay SDK failed to load. Please check your internet connection.');
    return false;
  }
  return true;
};

export const createRazorpayOrder = async (amount, currency = 'INR') => {
  try {
    const orderData = {
      amount: amount * 100,
      currency: currency,
      receipt: `receipt_${Date.now()}`,
    };
    return orderData;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const displayRazorpay = async ({
  amount,
  currency = 'INR',
  name = "Shraddha's Creation",
  description = 'Handmade Jewellery',
  image = '/logo.png',
  prefill = {},
  notes = {},
  onSuccess,
  onFailure,
}) => {
  const res = await initializeRazorpay();
  if (!res) {
    if (onFailure) onFailure({ error: 'Razorpay SDK not loaded' });
    return;
  }

  const orderData = await createRazorpayOrder(amount, currency);

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_dummy_key',
    amount: orderData.amount,
    currency: orderData.currency,
    name: name,
    description: description,
    image: image,
    order_id: orderData.receipt,
    handler: function (response) {
      if (onSuccess) {
        onSuccess({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });
      }
    },
    prefill: {
      name: prefill.name || '',
      email: prefill.email || '',
      contact: prefill.contact || '',
    },
    notes: notes,
    theme: {
      color: '#8B4513',
    },
    modal: {
      ondismiss: function () {
        if (onFailure) {
          onFailure({ error: 'Payment cancelled by user' });
        }
      },
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.on('payment.failed', function (response) {
    if (onFailure) {
      onFailure({
        error: response.error.description,
        code: response.error.code,
        metadata: response.error.metadata,
      });
    }
  });

  paymentObject.open();
};

export const verifyPayment = (razorpayPaymentId, razorpayOrderId, razorpaySignature) => {
  return true;
};

export const formatAmount = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getPaymentStatus = (paymentId) => {
  return {
    status: 'success',
    paymentId: paymentId,
    timestamp: new Date().toISOString(),
  };
};