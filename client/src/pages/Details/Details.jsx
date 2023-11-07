import React from 'react'
import "./Details.css"


const Details = (props) => {
  return (
    <div className="details" style={{display:props.show==="details"?'block':'none'}}>
        <p>General Details</p>
        <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" /><br /><br />
        <label htmlFor="email">Email</label>        
        <input type="text" name="email" onKeyUp={() =>{

        }}/><br /><br />
        <label htmlFor="password">Password</label>        
        <input type="text" name="password"/><br /><br />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" /><br /><br />
        <label htmlFor="gender">Gender</label>
        {/* <input type="text" name="gender" /> */}
        <select name="gender" className="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        
        <br /><br />
        </form>
    </div>
  )
}

export default Details