import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Dashboard.css"
import {logo} from "../../assets/poster.png"



const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className="dashboard">
        <p className="quote">There is hope, even when your brain tells you there isn't.</p>
        <button className="to-login" onClick={() => navigate('/login')}>Get Started</button>   
    </div>
  )
}

export default Dashboard