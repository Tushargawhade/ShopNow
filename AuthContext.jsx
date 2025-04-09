import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

// Create context
const AuthContext = createContext()

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Check if user is authenticated
  const isAuthenticated = !!token

  // Login function
  const login = async (username, password) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      })
      
      const { token } = response.data
      
      // Store token in localStorage
      localStorage.setItem('token', token)
      setToken(token)
      
      // For demo purposes, we'll store the username as the current user
      // In a real app, you might want to fetch user details here
      setCurrentUser(username)
      
      return true
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.')
      return false
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setCurrentUser(null)
  }

  // Check token on initial load
  useEffect(() => {
    // If we have a token, consider the user logged in
    // In a real app, you might want to validate the token here
    if (token) {
      // For demo purposes, we'll just set a placeholder username
      setCurrentUser('user')
    }
    
    setLoading(false)
  }, [token])

  // Context value
  const value = {
    currentUser,
    isAuthenticated,
    login,
    logout,
    loading,
    error
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
