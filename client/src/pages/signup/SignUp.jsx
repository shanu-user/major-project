import React from 'react'
import "./SignUp.css"


const SignUp = () => {
  return (
    <div className="signup">
      SignUp
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" /><br /><br />
        <label htmlFor="email">Email</label>        
        <input type="text" name="email" /><br /><br />
        <label htmlFor="password">Password</label>        
        <input type="text" name="password"/><br /><br />
      </form>
    </div>
  )
}

export default SignUp