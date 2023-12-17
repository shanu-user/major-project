import React from 'react'
import "./Information.css"



const Information = (props) => {
  return (
    <div className="info" style={{display:props.show==="info"?'block':'none'}}>
        <form className="information">
            <label htmlFor="name">Name</label>
            <input type="text" /><br /><br />
            <label htmlFor="age">Age</label>
            <input type="text" /><br /><br />
            <label htmlFor="gender">Gender</label>
            <input id="radio" type="radio" name="male" /><span>Male</span>
            <input id="radio" type="radio" name="female" /><span>Female</span><br />
        </form>
    </div>
  )
}

export default Information