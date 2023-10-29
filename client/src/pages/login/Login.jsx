import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import { login } from '../../actions/auth'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(login({email,password}))
    navigate('/')
  }

  return (
    <div className="login">
      Login
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>        
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br /><br />
        <label htmlFor="password">Password</label>        
        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
      </form>
    </div>
  )
}

export default Login