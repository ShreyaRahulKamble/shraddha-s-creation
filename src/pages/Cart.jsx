// src/pages/Cart.jsx
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';


export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyContent}>
          <svg
            style={styles.emptyIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 style={styles.emptyTitle}>Your cart is empty</h2>
          <p style={styles.emptyText}>
            Add some beautiful handmade jewellery to your cart
          </p>
          <Link to="/products" style={styles.shopButton}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Shopping Cart</h1>
        <p style={styles.itemCount}>
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </p>

        <div style={styles.cartLayout}>
          <div style={styles.itemsSection}>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.itemImage}
                />
                <div style={styles.itemDetails}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</p>
                  {item.selectedSize && (
                    <p style={styles.itemMeta}>Size: {item.selectedSize}</p>
                  )}
                  {item.customization && (
                    <p style={styles.itemMeta}>Note: {item.customization}</p>
                  )}
                </div>
                <div style={styles.itemActions}>
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
                  <p style={styles.itemTotal}>
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeButton}
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summarySection}>
            <div style={styles.summaryCard}>
              <h2 style={styles.summaryTitle}>Order Summary</h2>
              <div style={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Shipping</span>
                <span style={styles.freeShipping}>FREE</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.taxNote}>Tax</span>
                <span style={styles.taxNote}>Calculated at checkout</span>
              </div>
              <div style={styles.divider}></div>
              <div style={styles.summaryTotal}>
                <span style={styles.totalLabel}>Total</span>
                <span style={styles.totalAmount}>
                  ₹{getCartTotal().toLocaleString('en-IN')}
                </span>
              </div>
              <button onClick={handleCheckout} style={styles.checkoutButton}>
                Proceed to Checkout
              </button>
              <Link to="/products" style={styles.continueLink}>
                ← Continue Shopping
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
    minHeight: 'calc(100vh - 200px)',
    backgroundColor: '#f9f9f9',
    padding: '20px 16px',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1a1a1a',
  },
  itemCount: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '24px',
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
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '16px',
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    gap: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  itemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  itemName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: 0,
  },
  itemPrice: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },
  itemMeta: {
    fontSize: '13px',
    color: '#888',
    margin: 0,
  },
  itemActions: {
    gridColumn: '1 / -1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginTop: '8px',
    flexWrap: 'wrap',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '4px',
  },
  quantityButton: {
    width: '32px',
    height: '32px',
    border: 'none',
    backgroundColor: '#f0f0f0',
    borderRadius: '6px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    transition: 'background-color 0.2s',
  },
  quantityDisplay: {
    minWidth: '32px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  itemTotal: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: 0,
  },
  removeButton: {
    fontSize: '14px',
    color: '#e63946',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '4px 8px',
  },
  summarySection: {
    position: 'sticky',
    top: '90px',
    height: 'fit-content',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  summaryTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#1a1a1a',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    fontSize: '15px',
    color: '#333',
  },
  freeShipping: {
    color: '#28a745',
    fontWeight: '600',
  },
  taxNote: {
    fontSize: '13px',
    color: '#888',
  },
  divider: {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '16px 0',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px',
  },
  totalLabel: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  totalAmount: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#e63946',
  },
  checkoutButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#e63946',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '12px',
    transition: 'background-color 0.2s',
  },
  continueLink: {
    display: 'block',
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
    textDecoration: 'none',
    marginTop: '12px',
  },
  emptyContainer: {
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 16px',
  },
  emptyContent: {
    textAlign: 'center',
    maxWidth: '400px',
  },
  emptyIcon: {
    width: '80px',
    height: '80px',
    color: '#ddd',
    margin: '0 auto 24px',
  },
  emptyTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#1a1a1a',
  },
  emptyText: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '32px',
  },
  shopButton: {
    display: 'inline-block',
    padding: '14px 32px',
    backgroundColor: '#e63946',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
};

if (typeof window !== 'undefined' && window.innerWidth >= 768) {
  Object.assign(styles, {
    container: {
      ...styles.container,
      padding: '40px 24px',
    },
    title: {
      ...styles.title,
      fontSize: '36px',
    },
    cartLayout: {
      ...styles.cartLayout,
      gridTemplateColumns: '1fr 380px',
    },
    cartItem: {
      ...styles.cartItem,
      gridTemplateColumns: '120px 1fr auto',
      padding: '24px',
    },
    itemImage: {
      ...styles.itemImage,
      width: '120px',
      height: '120px',
    },
    itemActions: {
      ...styles.itemActions,
      gridColumn: 'auto',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginTop: 0,
    },
  });
}
