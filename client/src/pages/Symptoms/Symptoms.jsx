import React from 'react'
import "./Symptoms.css"



const Symptoms = (props) => {
  return (
    <div className="symptoms" style={{display: props.show==="symptoms"?'block':'none'}}>
        Symptoms
        <form action="">
            <label htmlFor=""></label>
            <input type="text" /><br />
            <label htmlFor=""></label>
            <input type="text" /><br />
            <label htmlFor=""></label>
            <input type="text" />
        </form>
    </div>
  )
}

export default Symptoms