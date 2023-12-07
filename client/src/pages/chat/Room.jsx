import React, { useEffect, useCallback, useState } from 'react'
import "./Room.css"
import { useSocket } from "../../Providers/Socket"
import peer from "../../service/Peer"
import ReactPlayer from 'react-player'
// import { FaShare } from 'react-icons/fa6'

const Room = () => {

  const socket = useSocket()
  const [remoteSocketId, setRemoteSocketId] = useState(null)
  const [myStream, setMyStream] = useState()

  //Handling callback functions
  const handleUserJoined = useCallback(({email, id}) => {
    console.log(`Email ${email} joined room`)
    setRemoteSocketId(id)
  }, [])


  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true})
    const offer = await peer.getOffer()
    socket.emit("user:call", {to: remoteSocketId, offer})
    setMyStream(stream)
  }, [remoteSocketId, socket])

  
  const handleIncomingCall = useCallback(async ({from, offer}) => {
    setRemoteSocketId(from)
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    })
    setMyStream(stream)
    console.log(`Incoming call ${from} ${offer}`)
    const ans = await peer.getAnswer(offer)
    socket.emit("call:accepted", {to: from, ans})
  }, [socket])


  const handleCallAccepted = useCallback(() => {
    peer.setLocalDescription()
    console.log("Call accepted")
  }, [])

  //Handling effects on initiating the page
  useEffect(() => {
    socket.on("user:joined", handleUserJoined)
    socket.on("incoming:call", handleIncomingCall)
    socket.on("call:accepted", handleCallAccepted)
    return () => {
      socket.off("user:joined", handleUserJoined)
      socket.off("incoming:call", handleIncomingCall)
      socket.off("call:accepted", handleCallAccepted)
    }
  }, [socket, handleUserJoined, handleIncomingCall, handleCallAccepted])

  return (
    <div className="room">
      <h1>Room Page</h1>    
      <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
      {
        remoteSocketId && <div>
          <button onClick={handleCallUser}>Call</button>
        </div>
      }
      {
        myStream  && <ReactPlayer playing muted height="300px" width="500px" url={myStream}/>
      }
    </div>
  )
}

export default Room