import React, { useState } from 'react'
import "./SignUp.css"
import {Link} from 'react-router-dom'
import Information from "../Information/Information"
import Details from "../Details/Details"
import Symptoms from "../Symptoms/Symptoms"
import { FaArrowRight } from 'react-icons/fa6'



const SignUp = () => {

  const [showVar, setShowVar] = useState("details")
  const [textColor, setTextColor] = useState("green")

  const toNext = (arg) =>{  
    setShowVar(arg)

  }
  return (
    <div className="signup">
      <div className="register-headers">
        <div className="headers" onClick={()=>setShowVar("details")} style={{color: showVar==="details"&&textColor}}>Details</div>
        <FaArrowRight style={{color: showVar==="details"&&textColor}}/>
        <div className="headers" onClick={()=>setShowVar("symptoms")} style={{color: showVar === "symptoms"&&textColor}}>Symptoms</div>
        <FaArrowRight style={{color: showVar === "symptoms"&&textColor}}/>
        <div className="headers" onClick={()=>setShowVar("info")} style={{color: showVar === "info"&&textColor}}>Information</div>
      {/* <FaArrowRight />*/}
      </div>
      <div className="page">
        <Details show={showVar}/>
        <Symptoms show={showVar}/>
        <Information show={showVar}/>
      </div>
    </div>
    )
}

export default SignUp
