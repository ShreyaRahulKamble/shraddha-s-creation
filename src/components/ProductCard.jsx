import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="product-card"
      style={{
        display: 'block',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden', backgroundColor: '#f8f8f8' }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {product.featured && (
          <span style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: '#d4af37',
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Featured
          </span>
        )}
        {product.stock === 0 && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              color: '#fff',
              fontSize: '1.25rem',
              fontWeight: '600',
              textTransform: 'uppercase',
            }}>
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div style={{ padding: '16px' }}>
        <h3 style={{
          fontSize: '1rem',
          fontWeight: '600',
          marginBottom: '8px',
          color: '#333',
          lineHeight: '1.4',
          minHeight: '2.8em',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}>
          {product.name}
        </h3>

        <p style={{
          fontSize: '0.875rem',
          color: '#666',
          marginBottom: '12px',
          textTransform: 'capitalize',
        }}>
          {product.category}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}>
          <div>
            <span style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#d4af37',
            }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span style={{
                fontSize: '0.875rem',
                color: '#999',
                textDecoration: 'line-through',
                marginLeft: '8px',
              }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          {product.rating && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#ffa500', fontSize: '0.875rem' }}>★</span>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>{product.rating}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          style={{
            width: '100%',
            padding: '10px 16px',
            backgroundColor: product.stock === 0 ? '#ccc' : '#d4af37',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
          onMouseEnter={(e) => {
            if (product.stock > 0) {
              e.currentTarget.style.backgroundColor = '#c29d2f';
            }
          }}
          onMouseLeave={(e) => {
            if (product.stock > 0) {
              e.currentTarget.style.backgroundColor = '#d4af37';
            }
          }}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;