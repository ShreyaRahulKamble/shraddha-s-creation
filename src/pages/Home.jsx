import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 6);
  const categories = [
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', path: '/products?category=necklaces' },
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop', path: '/products?category=earrings' },
    { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', path: '/products?category=bracelets' },
    { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', path: '/products?category=rings' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={styles.hero}>
        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Shraddha's Creation</h1>
            <p style={styles.heroSubtitle}>Handcrafted Jewellery Made With Love</p>
            <p style={styles.heroDescription}>
              Discover unique, handmade jewellery pieces that tell your story
            </p>
            <Link to="/products" style={styles.heroButton}>
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Shop By Category</h2>
          <div style={styles.categoryGrid}>
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                style={styles.categoryCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.categoryImageWrapper}>
                  <img
                    src={category.image}
                    alt={category.name}
                    style={styles.categoryImage}
                  />
                  <div style={styles.categoryOverlay}>
                    <h3 style={styles.categoryName}>{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Featured Products</h2>
          <div style={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={styles.viewAllContainer}>
            <Link to="/products" style={styles.viewAllButton}>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.aboutSection}>
        <div style={styles.container}>
          <div style={styles.aboutContent}>
            <h2 style={styles.aboutTitle}>Handmade With Love</h2>
            <p style={styles.aboutText}>
              Each piece at Shraddha's Creation is carefully handcrafted with attention to detail and passion. 
              We believe in creating jewellery that not only looks beautiful but also carries the warmth of 
              handmade artistry. Every item is unique, just like you.
            </p>
            <div style={styles.featureGrid}>
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>✨</div>
                <h3 style={styles.featureTitle}>Unique Designs</h3>
                <p style={styles.featureText}>One-of-a-kind pieces you won't find anywhere else</p>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>💎</div>
                <h3 style={styles.featureTitle}>Quality Materials</h3>
                <p style={styles.featureText}>Premium materials for lasting beauty</p>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>❤️</div>
                <h3 style={styles.featureTitle}>Made With Care</h3>
                <p style={styles.featureText}>Crafted with passion and dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    position: 'relative',
    height: '500px',
    backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=500&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContent: {
    textAlign: 'center',
    color: 'white',
    padding: '0 20px',
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 'bold',
    marginBottom: '16px',
    fontFamily: 'serif',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    marginBottom: '12px',
    fontWeight: '300',
  },
  heroDescription: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    marginBottom: '32px',
    opacity: '0.9',
  },
  heroButton: {
    display: 'inline-block',
    padding: '14px 40px',
    backgroundColor: '#d4af37',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    border: 'none',
  },
  section: {
    padding: '60px 20px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    textAlign: 'center',
    marginBottom: '40px',
    fontFamily: 'serif',
    color: '#333',
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '20px',
  },
  categoryCard: {
    textDecoration: 'none',
    display: 'block',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  categoryImageWrapper: {
    position: 'relative',
    paddingBottom: '100%',
    overflow: 'hidden',
  },
  categoryImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  categoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-end',
  },
  categoryName: {
    color: 'white',
    fontSize: '1.4rem',
    fontWeight: '600',
    margin: 0,
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
  },
  viewAllContainer: {
    textAlign: 'center',
  },
  viewAllButton: {
    display: 'inline-block',
    padding: '12px 36px',
    backgroundColor: '#333',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  aboutSection: {
    backgroundColor: '#f9f9f9',
    padding: '60px 20px',
  },
  aboutContent: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  aboutTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    marginBottom: '24px',
    fontFamily: 'serif',
    color: '#333',
  },
  aboutText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '48px',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
  },
  featureItem: {
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '1.3rem',
    marginBottom: '12px',
    color: '#333',
  },
  featureText: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
  },
};

export default Home;