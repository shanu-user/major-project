import React, {useState} from 'react'
import "./Dashboard.css"
import logo from '../../assets/poster.jpeg'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const getDirected = () => {
    navigate('/login')
  } 
  
  return (
    <div className="dashboard">
      {/*Dashboard*/}
      <img src={logo} className="wall-item"/>
      <p style={{width: 187, position: 'absolute', border: '1px solid black', right: 370, bottom: 396}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores aliquid, provident </p>
      <button onClick={getDirected} className="to-login">Get started</button>
    </div>
  )
}

export default Dashboard