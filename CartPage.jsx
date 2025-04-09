import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './CartPage.css'

const CartPage = () => {
  const { 
    cartItems, 
    cartTotal, 
    updateQuantity, 
    removeFromCart, 
    checkout,
    showCheckoutMessage
  } = useCart()
  
  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity))
  }
  
  const handleRemoveItem = (productId) => {
    removeFromCart(productId)
  }
  
  const handleCheckout = () => {
    checkout()
  }
  
  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {showCheckoutMessage && (
        <div className="alert alert-success checkout-message">
          Thank you for your purchase! Your order has been placed successfully.
        </div>
      )}
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.image} alt={item.title} />
                </div>
                
                <div className="cart-item-info">
                  <h3>
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="cart-item-price">
                    ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="quantity-input"
                    />
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="cart-total">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <button 
              className="btn btn-primary btn-block"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
