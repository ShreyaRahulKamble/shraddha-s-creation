// src/pages/Checkout.jsx
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { initiatePayment } from '../utils/razorpay';

function Checkout() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', pincode: '', notes: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (cart.length === 0) navigate('/cart');
  }, [cart, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Invalid phone';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Invalid pincode';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    setIsProcessing(true);
    try {
      const success = await initiatePayment({ customerInfo: formData, items: cart, totalAmount: getTotalPrice() });
      if (success) { clearCart(); navigate('/order-success'); }
      else { alert('Payment cancelled'); setIsProcessing(false); }
    } catch (error) {
      alert('Error occurred'); setIsProcessing(false);
    }
  };

  if (cart.length === 0) return null;
  const subtotal = getTotalPrice();
  const shipping = subtotal >= 1000 ? 0 : 50;
  const total = subtotal + shipping;

  const s = {
    page: { minHeight:'100vh', background:'#f9fafb', padding:'20px 20px 60px' },
    wrap: { maxWidth:'1200px', margin:'0 auto' },
    title: { fontSize:'32px', fontWeight:'bold', marginBottom:'30px', color:'#111' },
    grid: { display:'grid', gap:'30px' },
    card: { background:'#fff', padding:'24px', borderRadius:'8px', marginBottom:'20px', boxShadow:'0 1px 3px rgba(0,0,0,0.1)' },
    h2: { fontSize:'20px', fontWeight:'600', marginBottom:'20px', color:'#111' },
    row: { display:'grid', gap:'16px', marginBottom:'16px' },
    group: { marginBottom:'16px' },
    label: { display:'block', fontSize:'14px', fontWeight:'500', marginBottom:'6px', color:'#374151' },
    input: { width:'100%', padding:'10px 12px', fontSize:'16px', border:'1px solid #d1d5db', borderRadius:'6px', boxSizing:'border-box' },
    inputErr: { borderColor:'#ef4444' },
    error: { color:'#ef4444', fontSize:'13px', marginTop:'4px', display:'block' },
    textarea: { resize:'vertical', fontFamily:'inherit' },
    btn: { width:'100%', padding:'16px', fontSize:'18px', fontWeight:'600', color:'#fff', background:'#667eea', border:'none', borderRadius:'8px', cursor:'pointer' },
    btnDis: { opacity:0.6, cursor:'not-allowed' },
    sumItem: { display:'flex', gap:'12px', marginBottom:'16px', paddingBottom:'16px', borderBottom:'1px solid #e5e7eb' },
    sumImg: { width:'60px', height:'60px', objectFit:'cover', borderRadius:'4px' },
    sumInfo: { flex:1 },
    sumName: { fontSize:'14px', fontWeight:'500', marginBottom:'4px' },
    sumDet: { fontSize:'13px', color:'#6b7280' },
    sumPrice: { fontSize:'16px', fontWeight:'600' },
    divider: { height:'1px', background:'#e5e7eb', margin:'16px 0' },
    sumRow: { display:'flex', justifyContent:'space-between', marginBottom:'12px', fontSize:'15px' },
    totRow: { fontSize:'18px', fontWeight:'700' },
    free: { color:'#059669', fontSize:'13px', marginTop:'8px', textAlign:'center' },
    secure: { display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', marginTop:'16px', fontSize:'13px', color:'#6b7280' },
    lock: { width:'16px', height:'16px' }
  };

  return (
    <div style={s.page}>
      <div style={s.wrap}>
        <h1 style={s.title}>Checkout</h1>
        <div style={s.grid}>
          <div>
            <div style={s.card}>
              <h2 style={s.h2}>Order Summary</h2>
              <div>
                {cart.map(item => (
                  <div key={item.id} style={s.sumItem}>
                    <img src={item.image} alt={item.name} style={s.sumImg} />
                    <div style={s.sumInfo}>
                      <div style={s.sumName}>{item.name}</div>
                      <div style={s.sumDet}>Qty: {item.quantity} × ₹{item.price}</div>
                    </div>
                    <div style={s.sumPrice}>₹{item.price * item.quantity}</div>
                  </div>
                ))}
              </div>
              <div style={s.divider}></div>
              <div style={s.sumRow}><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div style={s.sumRow}><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
              {shipping === 0 && <div style={s.free}>🎉 Free shipping!</div>}
              <div style={s.divider}></div>
              <div style={{...s.sumRow,...s.totRow}}><span>Total</span><span>₹{total}</span></div>
              <div style={s.secure}>
                <svg style={s.lock} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure payment with Razorpay</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={s.card}>
              <h2 style={s.h2}>Contact Information</h2>
              <div style={s.row}>
                <div style={s.group}>
                  <label style={s.label}>First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{...s.input,...(errors.firstName?s.inputErr:{})}} />
                  {errors.firstName && <span style={s.error}>{errors.firstName}</span>}
                </div>
                <div style={s.group}>
                  <label style={s.label}>Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{...s.input,...(errors.lastName?s.inputErr:{})}} />
                  {errors.lastName && <span style={s.error}>{errors.lastName}</span>}
                </div>
              </div>
              <div style={s.group}>
                <label style={s.label}>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={{...s.input,...(errors.email?s.inputErr:{})}} />
                {errors.email && <span style={s.error}>{errors.email}</span>}
              </div>
              <div style={s.group}>
                <label style={s.label}>Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10-digit mobile" style={{...s.input,...(errors.phone?s.inputErr:{})}} />
                {errors.phone && <span style={s.error}>{errors.phone}</span>}
              </div>
            </div>
            <div style={s.card}>
              <h2 style={s.h2}>Shipping Address</h2>
              <div style={s.group}>
                <label style={s.label}>Address *</label>
                <textarea name="address" value={formData.address} onChange={handleChange} rows="3" style={{...s.input,...s.textarea,...(errors.address?s.inputErr:{})}} />
                {errors.address && <span style={s.error}>{errors.address}</span>}
              </div>
              <div style={s.row}>
                <div style={s.group}>
                  <label style={s.label}>City *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} style={{...s.input,...(errors.city?s.inputErr:{})}} />
                  {errors.city && <span style={s.error}>{errors.city}</span>}
                </div>
                <div style={s.group}>
                  <label style={s.label}>State *</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} style={{...s.input,...(errors.state?s.inputErr:{})}} />
                  {errors.state && <span style={s.error}>{errors.state}</span>}
                </div>
              </div>
              <div style={s.group}>
                <label style={s.label}>Pincode *</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="6-digit" style={{...s.input,...(errors.pincode?s.inputErr:{})}} />
                {errors.pincode && <span style={s.error}>{errors.pincode}</span>}
              </div>
            </div>
            <div style={s.card}>
              <h2 style={s.h2}>Additional Notes</h2>
              <div style={s.group}>
                <label style={s.label}>Order Notes (Optional)</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" placeholder="Special instructions..." style={{...s.input,...s.textarea}} />
              </div>
            </div>
            <button type="submit" disabled={isProcessing} style={{...s.btn,...(isProcessing?s.btnDis:{})}}>
              {isProcessing ? 'Processing...' : `Proceed to Payment - ₹${total}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
