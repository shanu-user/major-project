import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/profile')
  }

  return (
    <div className="login">
      <h2 className="mb-3 position-absolute start-25">Login Form</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group mb-2">
          <label htmlFor="email" className="form-label text-left">Email</label><br /><br />
          <input type="email" name="email" className="form-control w-50" placeholder="Enter your email"/>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password" className="form-label">Password</label><br /><br />
          <input type="password" name="password" className="form-control w-50" placeholder="Enter your password"/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
