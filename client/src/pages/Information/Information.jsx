import React from 'react'
import "./Information.css"



const Information = (props) => {
  return (
    <div className="info" style={{display:props.show==="info"?'block':'none'}}>
        Information
        <div className="information">
            <label htmlFor="name">Name</label>
            <input type="text" /><br />
            <label htmlFor="age">Age</label>
            <input type="text" /><br />
            <label htmlFor="gender">Gender</label>
            <input type="radio" name="male" />Male
            <input type="radio" name="female" />Female<br />
            <input type="text" />
        </div>
    </div>
  )
}

export default Information