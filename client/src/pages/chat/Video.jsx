import React, { useState, useCallback, useEffect } from 'react'
import { useSocket } from '../../Providers/Socket'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"


const Video = () => {
  const [email, setEmail] = useState('')
  const [room, setRoom] = useState('')
  const navigate = useNavigate()
  const socket = useSocket()

  console.log(socket)


  const handleSubmitForm = useCallback((e) => {
    e.preventDefault()
    console.log({email, room})
    socket.emit("room:join", {email, room})
  }, [email, room, socket])

  const handleJoinRoom = useCallback((data) => {
    // e.preventDefault()
    const {email, room} = data
    navigate(`/room/${room}`)
  }, [navigate])

  useEffect(() => {
    socket.on("room:join", handleJoinRoom)
    return () => {
      socket.off("room:join", handleJoinRoom)
    } 
  }, [socket, handleJoinRoom])
  return (
    <div className="container">
      <h1>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <label htmlFor="room">Room Number</label>
        <input type="text" name="room" value={room} onChange={(e) => setRoom(e.target.value)}/>
        <br /><br />
        <button type="submit" className="btn btn-warning">Join</button>
      </form>
    </div>
  )
}

export default Video
