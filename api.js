import axios from 'axios'

const API_URL = 'https://fakestoreapi.com'

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests if available
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  
  return config
})

// API functions
export const fetchProducts = async () => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error)
    throw error
  }
}

export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error)
    throw error
  }
}

export const fetchCategories = async () => {
  try {
    const response = await api.get('/products/categories')
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password })
    return response.data
  } catch (error) {
    console.error('Error during login:', error)
    throw error
  }
}

export default api
