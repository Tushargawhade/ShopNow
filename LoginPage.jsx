import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './LoginPage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  
  const { login, isAuthenticated, error } = useAuth()
  const navigate = useNavigate()
  
  // If already authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!username || !password) {
      setErrorMessage('Please enter both username and password')
      return
    }
    
    setIsLoading(true)
    setErrorMessage('')
    
    try {
      const success = await login(username, password)
      
      if (success) {
        navigate('/')
      } else {
        setErrorMessage(error || 'Login failed. Please check your credentials.')
      }
    } catch (err) {
      setErrorMessage('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>ShopNow</h1>
          <p>Login to your account</p>
        </div>
        
        {errorMessage && (
          <div className="alert alert-error">
            {errorMessage}
          </div>
        )}
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="login-info">
          <p>For demo purposes, use:</p>
          <p>Username: <strong>mor_2314</strong></p>
          <p>Password: <strong>83r5^_</strong></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
