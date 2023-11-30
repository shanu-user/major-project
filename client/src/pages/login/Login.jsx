import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import { login } from '../../actions/auth'
import "bootstrap/dist/css/bootstrap.min.css"


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
    // <div className="justify-content-center align-items-center">
    //   <label htmlFor="">Email</label>
    //   <input type="text" placeholder="Enter your Email"/><br />
    //   <label htmlFor="">Password</label>
    //   <input type="password" placeholder="Enter your password"/>
    // </div>
    <form className="login">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" name="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" placeholder="Enter your password" />
      </div>
      <button type="submit" className="btn btn-primary btn-warning">Submit</button>
    </form>
      // {/* Login*/}
      // <label htmlFor="name" className="details_label">Email</label>
      // <span>*</span>
      // <input type="text" name="name" className="details_text"/>
      // <br /><br />
      // <label htmlFor="password" className="details_label">Password</label>
      // <span>*</span>
      // <input type="password" name="password"  className="details_text"/>
      // <br /><br /><br />
      // <button className="login_btn">Log in</button>
      // <p className="to_next_link">
      //   New Here? &nbsp;
      //   <Link to="/signup" style={{textDecoration: "none"}}>Sign up</Link>
      // </p>
  )
}

export default Login