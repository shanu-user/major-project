import React from 'react'
import "../signup/SignUp.css"



const Symptoms = (props) => {
  return (
    <div className="symptoms" style={{display: props.show==="symptoms"?'block':'none'}}>
        <form>
            <label htmlFor="">What symptoms </label>
            <input type="text" /><br /><br />
            <label htmlFor="">Please share</label>
            <input type="text" /><br /><br />
            <label htmlFor="">Do you </label>
            <input type="text" /><br /><br />
            <label htmlFor="">Do you </label>
            <input type="text" /><br /><br />
            <label htmlFor="">Have you</label>
            <input type="text" /><br /><br />
            <label htmlFor="">Have you </label>
            <input type="text" /><br /><br />
        </form>
    </div>
  )
}

export default Symptoms