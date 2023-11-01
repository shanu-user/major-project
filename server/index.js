import express from 'express'
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser'
import {Server} from 'socket.io'
import dotenv from 'dotenv'



dotenv.config()
const io = new Server()
const app = express()
const port = process.env.YOUR_PORT;
// console.log(port);
// "Your port Number"

app.use(bodyParser.json())

const emailToSocketMapping = new Map()

io.on("connection", (socket) => {
    console.log("New connection")
    socket.on("join-room", (data) =>{
        const { roomId, email} = data
        console.log('User', email, 'Joined Room', roomId)
        socket.join(roomId)
        emailToSocketMapping.set(email, socket.id)
        socket.broadcast.to(roomId).emit('user-joined', {email})
    })
})



const server = app.listen(port, () => {
    // console.log(`Server running on ${port}`);
    console.log(process.env.YOUR_PORT)
  });
  
  server.on('error', (err) => {
    console.error("Server error:", err);
  });
  
io.listen(8001)
