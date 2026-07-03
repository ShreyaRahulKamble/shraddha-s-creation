import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* About Section */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Shraddha's Creation</h3>
            <p style={styles.text}>
              Handcrafted jewellery made with love and passion. Each piece is unique and tells its own story.
            </p>
            <div style={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>
                <Link to="/" style={styles.link}>Home</Link>
              </li>
              <li style={styles.linkItem}>
                <Link to="/products" style={styles.link}>Products</Link>
              </li>
              <li style={styles.linkItem}>
                <Link to="/cart" style={styles.link}>Cart</Link>
              </li>
              <li style={styles.linkItem}>
                <Link to="/about" style={styles.link}>About Us</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Policies</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>
                <Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link>
              </li>
              <li style={styles.linkItem}>
                <Link to="/terms-conditions" style={styles.link}>Terms & Conditions</Link>
              </li>
              <li style={styles.linkItem}>
                <Link to="/shipping-policy" style={styles.link}>Shipping Policy</Link>
              </li>
              <li style={styles.linkItem}>
                <Link to="/return-policy" style={styles.link}>Return Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Contact Us</h3>
            <ul style={styles.contactList}>
              <li style={styles.contactItem}>
                <Mail size={16} style={styles.contactIcon} />
                <a href="mailto:contact@shraddhascreation.com" style={styles.link}>
                  contact@shraddhascreation.com
                </a>
              </li>
              <li style={styles.contactItem}>
                <Phone size={16} style={styles.contactIcon} />
                <a href="tel:+919876543210" style={styles.link}>
                  +91 98765 43210
                </a>
              </li>
              <li style={styles.contactItem}>
                <MapPin size={16} style={styles.contactIcon} />
                <span style={styles.text}>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>
            © {currentYear} Shraddha's Creation. All rights reserved.
          </p>
          <p style={styles.madeWith}>
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c2c2c',
    color: '#ffffff',
    padding: '40px 20px 20px',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',
    marginBottom: '30px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#ffffff',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#d1d1d1',
    marginBottom: '10px',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#3c3c3c',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  linkItem: {
    marginBottom: '10px',
  },
  link: {
    color: '#d1d1d1',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease',
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '12px',
    fontSize: '14px',
    color: '#d1d1d1',
  },
  contactIcon: {
    marginRight: '10px',
    marginTop: '2px',
    flexShrink: 0,
  },
  divider: {
    height: '1px',
    backgroundColor: '#4c4c4c',
    margin: '30px 0 20px',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '13px',
    color: '#a1a1a1',
    margin: 0,
  },
  madeWith: {
    fontSize: '13px',
    color: '#a1a1a1',
    margin: 0,
  },
};

// Media queries applied via style injection
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 768px) {
      footer > div > div:first-child {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (min-width: 1024px) {
      footer > div > div:first-child {
        grid-template-columns: repeat(4, 1fr) !important;
      }
      footer > div > div:last-of-type {
        flex-direction: row !important;
        justify-content: space-between !important;
      }
    }
    footer a:hover {
      color: #ffffff !important;
    }
    footer a[style*="socialIcon"]:hover,
    footer > div > div:first-child > div:first-child a:hover {
      background-color: #4c4c4c !important;
    }
  `;
  document.head.appendChild(style);
}

export default Footer;