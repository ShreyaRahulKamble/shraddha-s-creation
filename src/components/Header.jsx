// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoText}>Shraddha's Creation</span>
        </Link>

        <button 
          style={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav style={{
          ...styles.nav,
          ...(menuOpen ? styles.navOpen : {})
        }}>
          <Link 
            to="/" 
            style={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            style={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/cart" 
            style={styles.cartLink}
            onClick={() => setMenuOpen(false)}
          >
            <span style={styles.cartIcon}>🛒</span>
            {cartItemCount > 0 && (
              <span style={styles.cartBadge}>{cartItemCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid #e5e7eb',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    textDecoration: 'none',
    color: '#111827',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  menuButton: {
    display: 'block',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    color: '#111827',
  },
  nav: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
    borderBottom: '1px solid #e5e7eb',
  },
  navOpen: {
    maxHeight: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  navLink: {
    textDecoration: 'none',
    color: '#374151',
    fontSize: '1rem',
    padding: '1rem',
    borderBottom: '1px solid #f3f4f6',
    transition: 'background-color 0.2s',
  },
  cartLink: {
    textDecoration: 'none',
    color: '#374151',
    fontSize: '1rem',
    padding: '1rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  cartIcon: {
    fontSize: '1.5rem',
  },
  cartBadge: {
    position: 'absolute',
    top: '0.5rem',
    left: '1.75rem',
    backgroundColor: '#ec4899',
    color: '#ffffff',
    borderRadius: '50%',
    width: '1.25rem',
    height: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
};

if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  
  if (mediaQuery.matches) {
    styles.menuButton.display = 'none';
    styles.nav.position = 'static';
    styles.nav.flexDirection = 'row';
    styles.nav.maxHeight = 'none';
    styles.nav.overflow = 'visible';
    styles.nav.borderBottom = 'none';
    styles.nav.gap = '2rem';
    styles.navLink.padding = '0.5rem 0';
    styles.navLink.borderBottom = 'none';
    styles.cartLink.padding = '0.5rem 0';
    styles.cartBadge.top = '-0.5rem';
    styles.cartBadge.left = '1.5rem';
  }
}