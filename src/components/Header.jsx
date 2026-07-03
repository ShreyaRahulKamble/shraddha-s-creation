import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function Header() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo} onClick={closeMenu}>
          <span style={styles.logoText}>Shraddha's Creation</span>
        </Link>

        <button 
          style={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav style={{
          ...styles.nav,
          ...(menuOpen ? styles.navOpen : {})
        }}>
          <Link to="/" style={styles.navLink} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/products" style={styles.navLink} onClick={closeMenu}>
            Products
          </Link>
          <Link to="/cart" style={styles.navLink} onClick={closeMenu}>
            Cart
          </Link>
        </nav>

        <Link to="/cart" style={styles.cartIcon} onClick={closeMenu}>
          <span style={styles.cartIconText}>🛒</span>
          {cartItemCount > 0 && (
            <span style={styles.badge}>{cartItemCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  logo: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    zIndex: 1001,
  },
  logoText: {
    background: 'linear-gradient(135deg, #d4a574 0%, #c4915f 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  menuButton: {
    display: 'block',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    color: '#333',
    zIndex: 1001,
  },
  nav: {
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    gap: '1rem',
  },
  navOpen: {
    display: 'flex',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    padding: '0.5rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
  },
  cartIcon: {
    position: 'relative',
    textDecoration: 'none',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1001,
  },
  cartIconText: {
    filter: 'grayscale(100%)',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#d4a574',
    color: '#fff',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
};

if (typeof window !== 'undefined' && window.innerWidth >= 768) {
  styles.menuButton.display = 'none';
  styles.nav.display = 'flex';
  styles.nav.flexDirection = 'row';
  styles.nav.position = 'static';
  styles.nav.boxShadow = 'none';
  styles.nav.padding = '0';
  styles.nav.gap = '2rem';
  styles.container.justifyContent = 'space-between';
}