import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div style={styles.container}>
        <div style={styles.notFound}>
          <h2>Product Not Found</h2>
          <button onClick={() => navigate('/products')} style={styles.backButton}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backLink}>
        ← Back
      </button>

      <div style={styles.productContainer}>
        <div style={styles.imageSection}>
          <div style={styles.mainImage}>
            <img 
              src={images[selectedImage]} 
              alt={product.name}
              style={styles.mainImageImg}
            />
          </div>
          
          {images.length > 1 && (
            <div style={styles.thumbnailContainer}>
              {images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  style={{
                    ...styles.thumbnail,
                    ...(selectedImage === index ? styles.thumbnailActive : {})
                  }}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} style={styles.thumbnailImg} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={styles.detailsSection}>
          <h1 style={styles.productName}>{product.name}</h1>
          
          <div style={styles.priceSection}>
            <span style={styles.price}>₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span style={styles.originalPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>

          {product.category && (
            <div style={styles.category}>
              <span style={styles.categoryBadge}>{product.category}</span>
            </div>
          )}

          <div style={styles.description}>
            <h3 style={styles.sectionTitle}>Description</h3>
            <p style={styles.descriptionText}>{product.description}</p>
          </div>

          {product.materials && (
            <div style={styles.materials}>
              <h3 style={styles.sectionTitle}>Materials</h3>
              <p style={styles.materialsText}>{product.materials}</p>
            </div>
          )}

          {product.dimensions && (
            <div style={styles.dimensions}>
              <h3 style={styles.sectionTitle}>Dimensions</h3>
              <p style={styles.dimensionsText}>{product.dimensions}</p>
            </div>
          )}

          <div style={styles.quantitySection}>
            <h3 style={styles.sectionTitle}>Quantity</h3>
            <div style={styles.quantityControls}>
              <button 
                onClick={() => handleQuantityChange(-1)}
                style={styles.quantityButton}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span style={styles.quantityDisplay}>{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                style={styles.quantityButton}
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
          </div>

          <div style={styles.actions}>
            <button 
              onClick={handleAddToCart}
              style={{
                ...styles.addToCartButton,
                ...(addedToCart ? styles.addedToCartButton : {})
              }}
            >
              {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <button 
              onClick={() => {
                addToCart(product, quantity);
                navigate('/cart');
              }}
              style={styles.buyNowButton}
            >
              Buy Now
            </button>
          </div>

          {product.inStock === false && (
            <div style={styles.outOfStock}>
              Currently Out of Stock
            </div>
          )}
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
    minHeight: '70vh',
  },
  backLink: {
    background: 'none',
    border: 'none',
    color: '#d4af37',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '20px',
    padding: '8px 0',
    fontWeight: '500',
  },
  notFound: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  backButton: {
    marginTop: '20px',
    padding: '12px 24px',
    background: '#d4af37',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },
  productContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
  },
  imageSection: {
    width: '100%',
  },
  mainImage: {
    width: '100%',
    aspectRatio: '1',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '16px',
  },
  mainImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  thumbnailContainer: {
    display: 'flex',
    gap: '12px',
    overflowX: 'auto',
    padding: '4px 0',
  },
  thumbnail: {
    width: '80px',
    height: '80px',
    flexShrink: 0,
    borderRadius: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color 0.2s',
  },
  thumbnailActive: {
    borderColor: '#d4af37',
  },
  thumbnailImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  detailsSection: {
    width: '100%',
  },
  productName: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#333',
    lineHeight: '1.3',
  },
  priceSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  price: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#d4af37',
  },
  originalPrice: {
    fontSize: '20px',
    color: '#999',
    textDecoration: 'line-through',
  },
  category: {
    marginBottom: '24px',
  },
  categoryBadge: {
    display: 'inline-block',
    padding: '6px 16px',
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    fontSize: '14px',
    color: '#666',
    fontWeight: '500',
  },
  description: {
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e0e0e0',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#333',
  },
  descriptionText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
  },
  materials: {
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e0e0e0',
  },
  materialsText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
  },
  dimensions: {
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e0e0e0',
  },
  dimensionsText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
  },
  quantitySection: {
    marginBottom: '32px',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  quantityButton: {
    width: '40px',
    height: '40px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontWeight: '600',
  },
  quantityDisplay: {
    fontSize: '18px',
    fontWeight: '600',
    minWidth: '40px',
    textAlign: 'center',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  addToCartButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#d4af37',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  addedToCartButton: {
    backgroundColor: '#4CAF50',
  },
  buyNowButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  outOfStock: {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: '#ffebee',
    color: '#c62828',
    textAlign: 'center',
    borderRadius: '4px',
    fontWeight: '600',
  },
  '@media (min-width: 768px)': {
    productContainer: {
      gridTemplateColumns: '1fr 1fr',
    },
    actions: {
      flexDirection: 'row',
    },
  },
};

if (window.matchMedia('(min-width: 768px)').matches) {
  styles.productContainer.gridTemplateColumns = '1fr 1fr';
  styles.actions.flexDirection = 'row';
}

export default ProductDetail;