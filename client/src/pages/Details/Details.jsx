import React from 'react'
import "./Details.css"


const Details = (props) => {
  return (
    <div className="details" style={{display:props.show==="details"?'block':'none'}}>
        General Details
        <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" /><br /><br />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" /><br /><br />
        <label htmlFor="gender">Gender</label>
        <input type="text" name="gender" /><br /><br />
        <label htmlFor="email">Email</label>        
        <input type="text" name="email" /><br /><br />
        <label htmlFor="password">Password</label>        
        <input type="text" name="password"/><br /><br />
        </form>
    </div>
  )
}

export default Details