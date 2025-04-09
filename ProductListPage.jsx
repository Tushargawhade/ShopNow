import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import './ProductListPage.css'

const ProductListPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  
  const { category } = useParams()
  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      
      try {
        // Determine the API endpoint based on whether a category is specified
        const url = category 
          ? `https://fakestoreapi.com/products/category/${category}`
          : 'https://fakestoreapi.com/products'
        
        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    
    fetchProducts()
  }, [category])
  
  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div className="product-list-page">
      <div className="page-header">
        <h1>
          {category 
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
            : 'All Products'
          }
        </h1>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : filteredProducts.length === 0 ? (
        <div className="no-products">
          {searchTerm 
            ? `No products found matching "${searchTerm}"`
            : 'No products available in this category'
          }
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductListPage
