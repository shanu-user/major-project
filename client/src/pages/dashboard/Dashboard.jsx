import React from 'react'
import "./Dashboard.css"
import {logo} from "../../assets/poster.png"



const Dashboard = () => {
  return (
    <div className="dashboard">
        <p className="quote">There is hope, even when your brain tells you there isn't.</p>
        <button className="to-login">Get Started</button>   
    </div>
  )
}

export default Dashboard