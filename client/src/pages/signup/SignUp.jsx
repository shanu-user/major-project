import React, { useState } from 'react'
import "./SignUp.css"
import {Link} from 'react-router-dom'
import Information from "../Information/Information"
import Symptoms from "../Symptoms/Symptoms"
import { FaArrowRight } from 'react-icons/fa6'



const SignUp = () => {

  const [showVar, setShowVar] = useState("symptoms")
  const [textColor, setTextColor] = useState("green")

  const toNext = (arg) =>{  
    setShowVar(arg)

  }
  return (
    <div className="signup">
      <div className="register-headers">
        <div className="headers" style={{color: showVar === "symptoms"&&textColor}}>Symptoms</div>
        <FaArrowRight style={{color: showVar === "symptoms"&&textColor}}/>
        <div className="headers" style={{color: showVar === "info"&&textColor}}>Information</div>
      {/* <FaArrowRight />*/}
      </div>
      <div className="page">
        <Symptoms show={showVar}/>
        <Information show={showVar}/>
        <br />
        {( showVar === "info") && 
          <button onClick={()=>{
            if(showVar === "symptoms")
              setShowVar("details") 
            else if(showVar === "info")
              setShowVar("symptoms") 
            
          }}>&lt; Previous</button>          
        }
        {(showVar === "symptoms") &&
          <button onClick={()=>{
            if(showVar === "details")
              setShowVar("symptoms") 
            else if(showVar === "symptoms")
              setShowVar("info") 
            
          }}>Next &gt;</button>
        }
      </div>
    </div>
    )
}

export default SignUp
