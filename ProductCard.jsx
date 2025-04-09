import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }
  
  return (
    <div className="card product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="card-img">
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-price">${product.price.toFixed(2)}</p>
          <p className="card-category">{product.category}</p>
        </div>
        
        <div className="card-footer">
          <button 
            className="btn btn-primary add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
