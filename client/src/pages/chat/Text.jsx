import React from 'react'
import "./Chat.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Text = () => {
  return (
    <div className="container">
      <div className="text-container w-75 h-25 mx-auto">
        <div className="sender">
          <img src="" className="text-profile w-25" />
          <p className="text-content"></p>
        </div>
        <div className="receiver">
          <img src="" className="text-profile w-25" />
          <p className="text-content"></p>
        </div>  
        <form className="text-portion">
          <input type="text" />
          <button></button>
        </form>
      </div>
    </div>
  )
}

export default Text
