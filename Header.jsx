import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import './Header.css'

const Header = () => {
  const { logout } = useAuth()
  const { cartCount } = useCart()
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    
    fetchCategories()
  }, [])
  
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            ShopNow
          </Link>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              
              {categories.length > 0 && (
                <li className="nav-item has-dropdown">
                  <span className="dropdown-toggle">Categories</span>
                  <ul className="dropdown-menu">
                    {categories.map(category => (
                      <li key={category}>
                        <NavLink 
                          to={`/category/${category}`}
                          className={({ isActive }) => isActive ? 'active' : ''}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              
              <li className="nav-item">
                <NavLink 
                  to="/cart" 
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  Cart
                  {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </NavLink>
              </li>
              
              <li className="nav-item">
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
