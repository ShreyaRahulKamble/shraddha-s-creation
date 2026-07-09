// src/components/ProductCard.jsx
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

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
        />
        {product.stock === 0 && (
          <div className="product-card-badge out-of-stock">Out of Stock</div>
        )}
        {product.featured && product.stock > 0 && (
          <div className="product-card-badge featured">Featured</div>
        )}
      </div>
      
      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        
        <p className="product-card-category">{product.category}</p>
        
        <div className="product-card-footer">
          <div className="product-card-price">
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="product-card-original-price">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="product-card-current-price">
              {formatPrice(product.price)}
            </span>
          </div>
          
          <button 
            className="product-card-button"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            aria-label={`Add ${product.name} to cart`}
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          display: block;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          color: inherit;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .product-card-image {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background: #f5f5f5;
        }

        .product-card-image img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-card-image img {
          transform: scale(1.05);
        }

        .product-card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 1;
        }

        .product-card-badge.featured {
          background: #ff6b6b;
          color: white;
        }

        .product-card-badge.out-of-stock {
          background: rgba(0, 0, 0, 0.7);
          color: white;
        }

        .product-card-content {
          padding: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .product-card-title {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #333;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-card-category {
          font-size: 13px;
          color: #666;
          margin: 0 0 12px 0;
          text-transform: capitalize;
        }

        .product-card-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .product-card-price {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .product-card-original-price {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
        }

        .product-card-current-price {
          font-size: 18px;
          font-weight: 700;
          color: #2c3e50;
        }

        .product-card-button {
          padding: 8px 16px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
          white-space: nowrap;
        }

        .product-card-button:hover:not(:disabled) {
          background: #2980b9;
        }

        .product-card-button:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .product-card-title {
            font-size: 15px;
          }

          .product-card-current-price {
            font-size: 16px;
          }

          .product-card-button {
            font-size: 12px;
            padding: 7px 12px;
          }

          .product-card-content {
            padding: 12px;
          }
        }
      `}</style>
    </Link>
  );
};

export default ProductCard;