import React from 'react'
import "./Symptoms.css"



const Symptoms = (props) => {
  return (
    <div className="symptoms" style={{display: props.show==="symptoms"?'block':'none'}}>
        <p>Symptoms</p>
        <form>
            <label htmlFor="">What symptoms do you face?</label>
            <input type="text" /><br />
            <label htmlFor="">Please share your medical history</label>
            <input type="text" /><br />
            <label htmlFor="">Do you currently take any medications?</label>
            <input type="text" />
            <label htmlFor="">Do you feel sad or anxious most days?</label>
            <input type="text" />
            <label htmlFor="">Have you been worrying about simple things you shouldn't be worrying about?</label>
            <input type="text" />
            <label htmlFor="">Have you lost interest in the work you enjoy? </label>
            <input type="text" />
        </form>
    </div>
  )
}

export default Symptoms