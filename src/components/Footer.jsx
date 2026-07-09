// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* About Section */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Shraddha's Creation</h3>
            <p style={styles.text}>
              Handcrafted jewellery made with love and care. Each piece is unique and designed to bring elegance to your style.
            </p>
            <div style={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={styles.socialIcon} aria-label="WhatsApp">
                <FaWhatsapp size={24} />
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
                <Link to="/products" style={styles.link}>Shop</Link>
              </li>
              <li style={styles.linkItem}>
                <Link to="/cart" style={styles.link}>Cart</Link>
              </li>
              <li style={styles.linkItem}>
                <a href="#about" style={styles.link}>About Us</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Customer Service</h3>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}>
                <a href="#shipping" style={styles.link}>Shipping Policy</a>
              </li>
              <li style={styles.linkItem}>
                <a href="#returns" style={styles.link}>Returns & Exchanges</a>
              </li>
              <li style={styles.linkItem}>
                <a href="#faq" style={styles.link}>FAQ</a>
              </li>
              <li style={styles.linkItem}>
                <a href="#privacy" style={styles.link}>Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={styles.section}>
            <h3 style={styles.heading}>Contact Us</h3>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <FaPhone size={16} style={styles.contactIcon} />
                <a href="tel:+919876543210" style={styles.link}>+91 98765 43210</a>
              </div>
              <div style={styles.contactItem}>
                <FaEnvelope size={16} style={styles.contactIcon} />
                <a href="mailto:info@shraddhascreation.com" style={styles.link}>info@shraddhascreation.com</a>
              </div>
              <div style={styles.contactItem}>
                <FaMapMarkerAlt size={16} style={styles.contactIcon} />
                <span style={styles.text}>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
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
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '3rem 1rem 1rem',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#ffffff',
  },
  text: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#cccccc',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  socialIcon: {
    color: '#ffffff',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  linkItem: {
    margin: 0,
  },
  link: {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  contactIcon: {
    color: '#ffffff',
    flexShrink: 0,
  },
  bottomBar: {
    borderTop: '1px solid #333333',
    paddingTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#999999',
    margin: 0,
  },
  madeWith: {
    fontSize: '0.9rem',
    color: '#999999',
    margin: 0,
  },
};