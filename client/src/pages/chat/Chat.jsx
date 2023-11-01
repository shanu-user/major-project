import React from 'react'
import {useNavigate} from 'react-router-dom'
const Chat = () => {

  const navigate = useNavigate()
  const getToVideoChat = () =>{
    navigate('/room')
  }
  return (
    <div>
      Chat
      <br /><br />
      <input type="text" placeholder="Enter your user name here"/><br /><br />
      <input type="text" placeholder="Enter your pass-key" /><br /><br />
      <button onClick={getToVideoChat}>Submit</button>
    </div>
  )
}

export default Chat