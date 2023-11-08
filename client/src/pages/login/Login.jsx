import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
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
      <label htmlFor="name" className="details_label">Email</label>
      <span>*</span>
      <input type="text" name="name" className="details_text"/>
      <br /><br />
      <label htmlFor="password" className="details_label">Password</label>
      <span>*</span>
      <input type="password" name="password"  className="details_text"/>
      <br /><br /><br />
      <button className="login_btn">Log in</button>
      <p className="to_next_link">
        New Here? &nbsp;
        <Link to="/signup" style={{textDecoration: "none"}}>Sign up</Link>
      </p>
    </div>
  )
}

export default Login