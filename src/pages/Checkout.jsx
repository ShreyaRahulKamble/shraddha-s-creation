import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { initiatePayment } from '../utils/razorpay';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Enter a valid 6-digit pincode';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      navigate('/cart');
      return;
    }

    setIsProcessing(true);

    try {
      const totalAmount = getTotalPrice();
      const orderDetails = {
        items: cart,
        shippingDetails: formData,
        total: totalAmount
      };

      const success = await initiatePayment(
        totalAmount,
        formData.name,
        formData.email,
        formData.phone,
        orderDetails
      );

      if (success) {
        clearCart();
        alert('Order placed successfully! Thank you for your purchase.');
        navigate('/');
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.emptyCart}>
          <h2 style={styles.emptyTitle}>Your cart is empty</h2>
          <p style={styles.emptyText}>Add some beautiful jewellery to your cart before checkout.</p>
          <button
            onClick={() => navigate('/products')}
            style={styles.shopButton}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>
      
      <div style={styles.content}>
        <div style={styles.formSection}>
          <h2 style={styles.sectionTitle}>Shipping Details</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={errors.name ? { ...styles.input, ...styles.inputError } : styles.input}
                placeholder="Enter your full name"
              />
              {errors.name && <span style={styles.errorText}>{errors.name}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={errors.email ? { ...styles.input, ...styles.inputError } : styles.input}
                placeholder="your@email.com"
              />
              {errors.email && <span style={styles.errorText}>{errors.email}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={errors.phone ? { ...styles.input, ...styles.inputError } : styles.input}
                placeholder="10-digit mobile number"
                maxLength="10"
              />
              {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                style={errors.address ? { ...styles.textarea, ...styles.inputError } : styles.textarea}
                placeholder="House no., Street, Locality"
                rows="3"
              />
              {errors.address && <span style={styles.errorText}>{errors.address}</span>}
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={errors.city ? { ...styles.input, ...styles.inputError } : styles.input}
                  placeholder="City"
                />
                {errors.city && <span style={styles.errorText}>{errors.city}</span>}
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  style={errors.state ? { ...styles.input, ...styles.inputError } : styles.input}
                  placeholder="State"
                />
                {errors.state && <span style={styles.errorText}>{errors.state}</span>}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                style={errors.pincode ? { ...styles.input, ...styles.inputError } : styles.input}
                placeholder="6-digit pincode"
                maxLength="6"
              />
              {errors.pincode && <span style={styles.errorText}>{errors.pincode}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Order Notes (Optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Any special instructions for your order"
                rows="2"
              />
            </div>
          </form>
        </div>

        <div style={styles.summarySection}>
          <h2 style={styles.sectionTitle}>Order Summary</h2>
          <div style={styles.summaryBox}>
            {cart.map((item) => (
              <div key={item.id} style={styles.summaryItem}>
                <img src={item.image} alt={item.name} style={styles.summaryImage} />
                <div style={styles.summaryInfo}>
                  <p style={styles.summaryName}>{item.name}</p>
                  <p style={styles.summaryQuantity}>Qty: {item.quantity}</p>
                </div>
                <p style={styles.summaryPrice}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
              </div>
            ))}
            
            <div style={styles.divider}></div>
            
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Subtotal:</span>
              <span style={styles.totalValue}>₹{getTotalPrice().toLocaleString('en-IN')}</span>
            </div>
            
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Shipping:</span>
              <span style={styles.freeShipping}>FREE</span>
            </div>
            
            <div style={styles.divider}></div>
            
            <div style={styles.totalRow}>
              <span style={styles.grandTotalLabel}>Total:</span>
              <span style={styles.grandTotalValue}>₹{getTotalPrice().toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              style={isProcessing ? { ...styles.payButton, ...styles.payButtonDisabled } : styles.payButton}
            >
              {isProcessing ? 'Processing...' : 'Proceed to Payment'}
            </button>

            <p style={styles.secureText}>🔒 Secure payment powered by Razorpay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    minHeight: 'calc(100vh - 200px)'
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#333',
    textAlign: 'center'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px'
  },
  formSection: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#555'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    outline: 'none',
    transition: 'border-color 0.3s'
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s'
  },
  inputError: {
    borderColor: '#e74c3c'
  },
  errorText: {
    fontSize: '13px',
    color: '#e74c3c',
    marginTop: '-4px'
  },
  summarySection: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    height: 'fit-content',
    position: 'sticky',
    top: '20px'
  },
  summaryBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  summaryItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  summaryImage: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '6px'
  },
  summaryInfo: {
    flex: 1,
    minWidth: 0
  },
  summaryName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    margin: '0 0 4px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  summaryQuantity: {
    fontSize: '13px',
    color: '#777',
    margin: 0
  },
  summaryPrice: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    whiteSpace: 'nowrap'
  },
  divider: {
    height: '1px',
    backgroundColor: '#eee',
    margin: '10px 0'
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0'
  },
  totalLabel: {
    fontSize: '15px',
    color: '#666'
  },
  totalValue: {
    fontSize: '15px',
    fontWeight: '500',
    color: '#333'
  },
  freeShipping: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#27ae60'
  },
  grandTotalLabel: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333'
  },
  grandTotalValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#d35400'
  },
  payButton: {
    backgroundColor: '#d35400',
    color: '#fff',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    width: '100%',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s'
  },
  payButtonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed'
  },
  secureText: {
    fontSize: '13px',
    color: '#777',
    textAlign: 'center',
    marginTop: '12px'
  },
  emptyCart: {
    textAlign: 'center',
    padding: '60px 20px'
  },
  emptyTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '12px'
  },
  emptyText: {
    fontSize: '15px',
    color: '#777',
    marginBottom: '24px'
  },
  shopButton: {
    backgroundColor: '#d35400',
    color: '#fff',
    padding: '14px 28px',
    fontSize: '15px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }
};
