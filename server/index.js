import express from 'express'
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser'
import {Server} from 'socket.io'
import dotenv from 'dotenv'



dotenv.config()
const io = new Server({
  cors: true
})
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
        emailToSocketMapping.set(email, socket.id)
        socket.join(roomId)
        socket.emit('joined-room', { roomId })
        socket.broadcast.to(roomId).emit('user-joined', {email})
    })
})




app.listen(8000, () => console.log("Server activated on port 8000"))
io.listen(8001)
