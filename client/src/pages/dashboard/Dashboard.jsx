import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Dashboard.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className="dashboard">
        <h3 className="d-flex flex-column align-items-center justify-content-center">There is hope, even when your brain tells you there isn't.</h3>
        <br /><br />
        <Button onClick={() => navigate('/login')}>Get Started</Button>
    </div>
  )
}

export default Dashboard