import React from 'react'
import "./Chat.css"
import "bootstrap/dist/css/bootstrap.min.css"
import  { FaCircleArrowRight } from 'react-icons/fa6'
import sender_img from "../../assets/Front_Page_Image.jpeg"
import receiver_img from "../../assets/Login_Background.jpeg"


const handleSubmit = (e) => {
  e.preventDefault()

}
const Text = () => {
  return (
    <div className="container">
      <div className="text-container w-75 h-75 mx-auto">
        <div className="sender">
          <img src={sender_img} className="profile_img"/>
          <p>lorem</p>
        </div>
        <br /><br /><br /><br />
        <div className="receiver">
          <img src={receiver_img} className="profile_img"/>
          <p>lorem</p>
        </div>
        <br /><br /><br /><br />
        <div className="sender">
          <img src={sender_img} className="profile_img"/>
          <p>lorem</p>
        </div>
        <br /><br /><br /><br />
        <div className="receiver">
          <img src={receiver_img} className="profile_img"/>
          <p>lorem</p>
        </div>
        
        <div className="text-portion d-flex align-items-center justify-content-center" >
          <input type="text" className="w-auto h-auto mr-5 text-input"/>
          <FaCircleArrowRight onClick={handleSubmit} style={{width: 72, height: 35}}/>
        </div>
      </div>
    </div>
  )
}

export default Text
