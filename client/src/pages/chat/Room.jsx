import React, { useEffect, useCallback } from 'react'
import "./Room.css"
import { useSocket } from "../../Providers/Socket"

// import { FaShare } from 'react-icons/fa6'

const Room = () => {

  const socket = useSocket()

  const handleUserJoined = useCallback(({email, id}) => {
    console.log(`Email ${email} joined room`)
  }, [])

  useEffect(() => {
    socket.on("user:joined", handleUserJoined)

    return () => {
      socket.off("user:joined", handleUserJoined)
    }
  }, [socket, handleUserJoined])

  return (
    <div className="room">
      <h1>Room Page</h1>    
    </div>
  )
}

export default Room