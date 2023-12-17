import React, { useState, useCallback } from 'react'
import "./Register.css"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {signup} from '../../actions/auth'


const Register = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("")
  const [country, setCountry] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = useCallback((e) => {
    console.log(e)
    e.preventDefault()
    if(!name && !email && !password && !gender && !country)
      alert("Please enter the complete details")
    dispatch(signup({name, email, password, age, gender, country}))
    navigate('/')
  }, [name, email, password, age, gender, country, dispatch, navigate])


  return (
    <div className="register" >
        <form className='signup-form'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} /><br /><br />
        <label htmlFor="email">Email</label>        
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/><br /><br />
        <label htmlFor="password">Password</label>        
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/><br /><br />
        <label htmlFor="r_password">Repeat Password</label>        
        <input type="password" name="r_password" onKeyPress={(e) => {
          if(e.key === "Enter" && e.target.value !== password){
            alert("Password doesn't match")
          }
          else{
            setPassword(e.target.value)
          }
        }}/><br /><br />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" onChange={(e) => setAge(e.target.value)}/><br /><br />
        <label htmlFor="country">Country</label>
        <input type="text" name="country" onChange={(e) => setCountry(e.target.value)}/><br /><br />
        <label htmlFor="gender">Gender</label>
        <select name="gender" onChange={(e) => {
          console.log(e.value)
          setGender(e.value)
        }} className="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br /><br />
        <button type="submit" className="btn btn-warning" onClick={handleSubmit}>Sign up</button>
        </form>
    </div>
  )
}

export default Register