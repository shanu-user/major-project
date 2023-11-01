import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import image from '../../assets/login.jpeg'
import { login } from '../../actions/auth'

const Login = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(login({email,password}))
    navigate('/profile')
  }

  return (
    <div className="login">
      {/* Login*/}
      <img src={image} />
      <div className="form-login">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email</label>        
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br />
          <label htmlFor="password">Password</label>        
          <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
          <p>New here? <Link to='/signup'>Sign Up</Link></p>
        </form>
      </div>
      
    </div>
  )
}

export default Login