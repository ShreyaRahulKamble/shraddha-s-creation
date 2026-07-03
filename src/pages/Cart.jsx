import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <div style={styles.emptyCartContent}>
          <svg style={styles.emptyCartIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 style={styles.emptyCartTitle}>Your Cart is Empty</h2>
          <p style={styles.emptyCartText}>Add some beautiful handmade jewellery to your cart!</p>
          <Link to="/products" style={styles.shopNowButton}>
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Shopping Cart</h1>
        <div style={styles.cartLayout}>
          <div style={styles.itemsSection}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</p>
                  <div style={styles.quantityControl}>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      style={styles.quantityButton}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span style={styles.quantityDisplay}>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      style={styles.quantityButton}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
                <div style={styles.itemTotal}>
                  <p style={styles.itemTotalPrice}>
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.summarySection}>
            <div style={styles.summaryCard}>
              <h2 style={styles.summaryTitle}>Order Summary</h2>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Subtotal</span>
                <span style={styles.summaryValue}>₹{getCartTotal().toLocaleString('en-IN')}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Shipping</span>
                <span style={styles.summaryValue}>FREE</span>
              </div>
              <div style={styles.summaryDivider}></div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryTotalLabel}>Total</span>
                <span style={styles.summaryTotalValue}>₹{getCartTotal().toLocaleString('en-IN')}</span>
              </div>
              <button onClick={handleCheckout} style={styles.checkoutButton}>
                Proceed to Checkout
              </button>
              <Link to="/products" style={styles.continueShoppingLink}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 120px)',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#333',
  },
  cartLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
  },
  itemsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  cartItem: {
    display: 'flex',
    gap: '16px',
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    flexShrink: 0,
  },
  itemDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  itemName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  },
  itemPrice: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
  },
  quantityButton: {
    width: '32px',
    height: '32px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  },
  quantityDisplay: {
    minWidth: '40px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
  },
  removeButton: {
    marginTop: '8px',
    padding: '6px 12px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#e74c3c',
    cursor: 'pointer',
    fontSize: '14px',
    textAlign: 'left',
    textDecoration: 'underline',
  },
  itemTotal: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    minWidth: '80px',
  },
  itemTotalPrice: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  },
  summarySection: {
    position: 'sticky',
    top: '80px',
  },
  summaryCard: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  summaryTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  summaryLabel: {
    fontSize: '14px',
    color: '#666',
  },
  summaryValue: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '500',
  },
  summaryDivider: {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '16px 0',
  },
  summaryTotalLabel: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  summaryTotalValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#d4a574',
  },
  checkoutButton: {
    width: '100%',
    padding: '14px',
    marginTop: '20px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#d4a574',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  continueShoppingLink: {
    display: 'block',
    textAlign: 'center',
    marginTop: '12px',
    color: '#666',
    textDecoration: 'none',
    fontSize: '14px',
  },
  emptyCart: {
    minHeight: 'calc(100vh - 120px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  emptyCartContent: {
    textAlign: 'center',
    maxWidth: '400px',
  },
  emptyCartIcon: {
    width: '80px',
    height: '80px',
    margin: '0 auto 20px',
    color: '#ccc',
  },
  emptyCartTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#333',
  },
  emptyCartText: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '24px',
  },
  shopNowButton: {
    display: 'inline-block',
    padding: '12px 32px',
    backgroundColor: '#d4a574',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
  '@media (min-width: 768px)': {
    cartLayout: {
      gridTemplateColumns: '2fr 1fr',
    },
    itemImage: {
      width: '120px',
      height: '120px',
    },
  },
};