// src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity);
      navigate('/checkout');
    }
  };

  if (!product) {
    return <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'400px',gap:'20px'}}><div style={{width:'50px',height:'50px',border:'5px solid #f3f3f3',borderTop:'5px solid #e91e63',borderRadius:'50%',animation:'spin 1s linear infinite'}}></div><p>Loading...</p></div>;
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div style={{maxWidth:'1200px',margin:'0 auto',padding:'20px'}}>
      <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'30px',fontSize:'14px',flexWrap:'wrap'}}>
        <Link to="/" style={{color:'#666',textDecoration:'none'}}>Home</Link>
        <span style={{color:'#999'}}>/</span>
        <Link to="/products" style={{color:'#666',textDecoration:'none'}}>Products</Link>
        <span style={{color:'#999'}}>/</span>
        <span style={{color:'#333',fontWeight:'500'}}>{product.name}</span>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr',gap:'40px',marginBottom:'60px'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'15px'}}>
          <div style={{position:'relative',width:'100%',backgroundColor:'#f9f9f9',borderRadius:'12px',overflow:'hidden'}}>
            <img src={product.images[selectedImage]} alt={product.name} style={{width:'100%',height:'auto',aspectRatio:'1',objectFit:'cover',display:'block'}} />
            {product.discount > 0 && <div style={{position:'absolute',top:'15px',left:'15px',backgroundColor:'#e91e63',color:'white',padding:'8px 15px',borderRadius:'6px',fontWeight:'bold',fontSize:'14px'}}>{product.discount}% OFF</div>}
          </div>
          <div style={{display:'flex',gap:'10px',overflowX:'auto'}}>
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`View ${index + 1}`} style={{width:'80px',height:'80px',objectFit:'cover',borderRadius:'8px',cursor:'pointer',border:selectedImage === index?'2px solid #e91e63':'2px solid transparent',flexShrink:'0'}} onClick={() => setSelectedImage(index)} />
            ))}
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
          <h1 style={{fontSize:'28px',fontWeight:'bold',color:'#333',margin:'0',lineHeight:'1.3'}}>{product.name}</h1>
          
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <div style={{display:'flex',gap:'2px'}}>
              {[...Array(5)].map((_, i) => <span key={i} style={{fontSize:'18px',color:i < Math.floor(product.rating)?'#FFD700':'#ddd'}}>★</span>)}
            </div>
            <span style={{fontSize:'14px',color:'#666'}}>{product.rating} ({product.reviews} reviews)</span>
          </div>

          <div style={{display:'flex',alignItems:'center',gap:'15px',flexWrap:'wrap'}}>
            <span style={{fontSize:'32px',fontWeight:'bold',color:'#e91e63'}}>₹{product.price.toLocaleString('en-IN')}</span>
            {product.discount > 0 && (
              <>
                <span style={{fontSize:'20px',color:'#999',textDecoration:'line-through'}}>₹{product.originalPrice.toLocaleString('en-IN')}</span>
                <span style={{fontSize:'14px',color:'#4caf50',fontWeight:'500'}}>Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}</span>
              </>
            )}
          </div>

          <div style={{fontSize:'14px',fontWeight:'500'}}>
            {product.stock > 0 ? <span style={{color:'#4caf50'}}>✓ In Stock ({product.stock} available)</span> : <span style={{color:'#f44336'}}>Out of Stock</span>}
          </div>

          <div style={{paddingTop:'10px',borderTop:'1px solid #eee'}}>
            <h3 style={{fontSize:'18px',fontWeight:'bold',color:'#333',marginBottom:'10px'}}>Description</h3>
            <p style={{fontSize:'15px',lineHeight:'1.6',color:'#666',margin:'0'}}>{product.description}</p>
          </div>

          {product.features && product.features.length > 0 && (
            <div style={{paddingTop:'10px',borderTop:'1px solid #eee'}}>
              <h3 style={{fontSize:'18px',fontWeight:'bold',color:'#333',marginBottom:'10px'}}>Features</h3>
              <ul style={{margin:'0',paddingLeft:'20px'}}>
                {product.features.map((f, i) => <li key={i} style={{fontSize:'15px',lineHeight:'1.8',color:'#666'}}>{f}</li>)}
              </ul>
            </div>
          )}

          <div style={{paddingTop:'10px',borderTop:'1px solid #eee'}}>
            <h3 style={{fontSize:'18px',fontWeight:'bold',color:'#333',marginBottom:'10px'}}>Specifications</h3>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'15px'}}>
              <div style={{display:'flex',justifyContent:'space-between',padding:'10px',backgroundColor:'#f9f9f9',borderRadius:'6px'}}>
                <span style={{fontWeight:'500',color:'#666'}}>Category:</span>
                <span style={{color:'#333'}}>{product.category}</span>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',padding:'10px',backgroundColor:'#f9f9f9',borderRadius:'6px'}}>
                <span style={{fontWeight:'500',color:'#666'}}>Material:</span>
                <span style={{color:'#333'}}>{product.material}</span>
              </div>
              {product.weight && (
                <div style={{display:'flex',justifyContent:'space-between',padding:'10px',backgroundColor:'#f9f9f9',borderRadius:'6px'}}>
                  <span style={{fontWeight:'500',color:'#666'}}>Weight:</span>
                  <span style={{color:'#333'}}>{product.weight}</span>
                </div>
              )}
              {product.dimensions && (
                <div style={{display:'flex',justifyContent:'space-between',padding:'10px',backgroundColor:'#f9f9f9',borderRadius:'6px'}}>
                  <span style={{fontWeight:'500',color:'#666'}}>Dimensions:</span>
                  <span style={{color:'#333'}}>{product.dimensions}</span>
                </div>
              )}
            </div>
          </div>

          <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
            <label style={{fontSize:'16px',fontWeight:'500',color:'#333'}}>Quantity:</label>
            <div style={{display:'flex',alignItems:'center',gap:'0',border:'2px solid #e0e0e0',borderRadius:'8px',overflow:'hidden'}}>
              <button style={{padding:'10px 15px',backgroundColor:'white',border:'none',fontSize:'18px',cursor:'pointer',color:'#333'}} onClick={() => quantity > 1 && setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
              <span style={{padding:'10px 20px',borderLeft:'1px solid #e0e0e0',borderRight:'1px solid #e0e0e0',fontSize:'16px',fontWeight:'500',minWidth:'60px',textAlign:'center'}}>{quantity}</span>
              <button style={{padding:'10px 15px',backgroundColor:'white',border:'none',fontSize:'18px',cursor:'pointer',color:'#333'}} onClick={() => quantity < product.stock && setQuantity(quantity + 1)} disabled={quantity >= product.stock}>+</button>
            </div>
          </div>

          <div style={{display:'flex',gap:'15px',flexWrap:'wrap'}}>
            <button style={{flex:'1',minWidth:'200px',padding:'15px 30px',backgroundColor:addedToCart?'#4caf50':'#e91e63',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'600',cursor:product.stock===0?'not-allowed':'pointer',transition:'all 0.3s'}} onClick={handleAddToCart} disabled={product.stock === 0}>{addedToCart ? '✓ Added to Cart' : 'Add to Cart'}</button>
            <button style={{flex:'1',minWidth:'200px',padding:'15px 30px',backgroundColor:'#333',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'600',cursor:product.stock===0?'not-allowed':'pointer',transition:'all 0.3s'}} onClick={handleBuyNow} disabled={product.stock === 0}>Buy Now</button>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'15px',padding:'20px',backgroundColor:'#f9f9f9',borderRadius:'12px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}><span style={{fontSize:'24px'}}>🚚</span><span style={{fontSize:'14px',color:'#666'}}>Free Shipping above ₹500</span></div>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}><span style={{fontSize:'24px'}}>↩️</span><span style={{fontSize:'14px',color:'#666'}}>7-day Easy Returns</span></div>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}><span style={{fontSize:'24px'}}>✨</span><span style={{fontSize:'14px',color:'#666'}}>100% Handmade</span></div>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}><span style={{fontSize:'24px'}}>🔒</span><span style={{fontSize:'14px',color:'#666'}}>Secure Payment</span></div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div style={{marginTop:'60px'}}>
          <h2 style={{fontSize:'28px',fontWeight:'bold',textAlign:'center',marginBottom:'30px',color:'#333'}}>You May Also Like</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))',gap:'20px'}}>
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} style={{textDecoration:'none',color:'inherit',border:'1px solid #e0e0e0',borderRadius:'12px',overflow:'hidden',transition:'all 0.3s'}}>
                <img src={rp.images[0]} alt={rp.name} style={{width:'100%',height:'250px',objectFit:'cover'}} />
                <div style={{padding:'15px'}}>
                  <h3 style={{fontSize:'16px',fontWeight:'600',marginBottom:'10px',color:'#333'}}>{rp.name}</h3>
                  <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <span style={{fontSize:'18px',fontWeight:'bold',color:'#e91e63'}}>₹{rp.price.toLocaleString('en-IN')}</span>
                    {rp.discount > 0 && <span style={{fontSize:'14px',color:'#999',textDecoration:'line-through'}}>₹{rp.originalPrice.toLocaleString('en-IN')}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
