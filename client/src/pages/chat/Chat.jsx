import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSocket } from '../../Providers/Socket'
import "./Chat.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Text from './Text'
import Video from './Video'
import "bootstrap/dist/css/bootstrap.min.css"

const Chat = () => {

  const navigate = useNavigate()
  const [move, setMove] = useState(false)
  return(
    <div className="chat">
      <div className="container">
        <div className="chat-options mx-auto" onClick={() => setMove(!move)}>
          {
            move? <div className={`text ${move ? 'moveLeft' : 'moveRight'}`} >Text</div> : <div className={`video ${move ? 'moveRight': 'moveLeft'}`} >Video</div>
          }
      </div>

      </div>
      {
        move ? <Text /> : <Video /> 
      }
    </div>
  )
}

export default Chat