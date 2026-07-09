// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products';

function Home() {
  const products = productsData.default || productsData;
  const featuredProducts = products.filter(product => product.featured).slice(0, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Shraddha's Creation</h1>
          <p className="hero-subtitle">Handcrafted Jewellery with Love</p>
          <p className="hero-description">
            Discover unique, handmade jewellery pieces that tell a story. 
            Each creation is crafted with care and attention to detail.
          </p>
          <Link to="/products" className="hero-cta">
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Collection</h2>
            <p className="section-subtitle">Handpicked pieces just for you</p>
          </div>

          <div className="products-grid">
            {featuredProducts.length > 0 ? (
              featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="no-products">No featured products available</p>
            )}
          </div>

          <div className="view-all-container">
            <Link to="/products" className="btn-view-all">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="about-title">Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3 className="feature-title">Handcrafted</h3>
                <p className="feature-description">
                  Every piece is lovingly handmade with attention to detail
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💎</div>
                <h3 className="feature-title">Unique Designs</h3>
                <p className="feature-description">
                  One-of-a-kind pieces you won't find anywhere else
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌿</div>
                <h3 className="feature-title">Sustainable</h3>
                <p className="feature-description">
                  Made with eco-friendly materials and practices
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3 className="feature-title">Fast Delivery</h3>
                <p className="feature-description">
                  Quick and secure shipping across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Find Your Perfect Piece?</h2>
            <p className="cta-description">
              Explore our full collection of handmade jewellery
            </p>
            <Link to="/products" className="cta-button">
              Browse Collection
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          width: 100%;
        }

        .hero {
          position: relative;
          height: 70vh;
          min-height: 500px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.05)"/></svg>');
          opacity: 0.3;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
          padding: 0 20px;
          max-width: 800px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 1rem;
          opacity: 0.95;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero-cta {
          display: inline-block;
          padding: 15px 40px;
          background: white;
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .featured-section {
          padding: 60px 0;
          background: #f9f9f9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #666;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .no-products {
          text-align: center;
          color: #666;
          font-size: 1.1rem;
          padding: 40px;
        }

        .view-all-container {
          text-align: center;
          margin-top: 40px;
        }

        .btn-view-all {
          display: inline-block;
          padding: 12px 35px;
          background: #667eea;
          color: white;
          text-decoration: none;
          font-weight: 600;
          border-radius: 25px;
          transition: all 0.3s ease;
        }

        .btn-view-all:hover {
          background: #764ba2;
          transform: translateY(-2px);
        }

        .about-section {
          padding: 60px 0;
          background: white;
        }

        .about-content {
          text-align: center;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 50px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .feature-card {
          padding: 30px;
          background: #f9f9f9;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .feature-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }

        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .cta-button {
          display: inline-block;
          padding: 15px 40px;
          background: white;
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .hero {
            height: 60vh;
            min-height: 400px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;