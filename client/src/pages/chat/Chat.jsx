import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSocket } from '../../Providers/Socket'

const Chat = () => {
  const { socket } = useSocket()


  const [email, setEmail] = useState()
  const [roomId, setRoomId] = useState()
  const handleJoinRoom = () =>{
    socket.emit('join-room', { emailId: email, roomId})
    navigate('/room')
  }

  const handleRoomJoined = ({ roomId }) =>{
    console.log('Room Joined', roomId)
    navigate('/room')
  }


  useEffect(() => {
    socket.on('joined-room', handleRoomJoined)
  }, [socket, handleRoomJoined])


  const navigate = useNavigate()
  
  return (
    <div>
      Chat
      <br /><br />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="Enter your email here"/><br /><br />
      <input type="text" value={roomId} onChange={e => setRoomId(e.target.value)}placeholder="Enter your room id" /><br /><br />
      <button onClick={handleJoinRoom}>Submit</button>
    </div>
  )
}

export default Chat