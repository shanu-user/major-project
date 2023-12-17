import express from 'express'
import userRoutes from './routes/users.js'
import bodyParser from 'body-parser'
import {Server} from 'socket.io'
import dotenv from 'dotenv'
import cors from  'cors'
import mysql from 'mysql'

dotenv.config()


//Handling DB connections
const db = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
})

db.connect((err) => {
    if(err){
      console.log('Error connecting to server', err)
    }else{
      console.log('Connected successfully')
    }
})

//Handling Socket Connections
const io = new Server(8000, {
  cors: true
})


//Handling express setup
const app = express()
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())




//Handling API requests
app.use('/users', userRoutes)




//Handling DB queries
export default db







//Handling socket communications
const emailToSocketMap = new Map()
const socketidToEmailMap = new Map()


io.on("connection", (socket) => {
    console.log("Socket connected", socket.id)
    socket.on("room:join", (data) =>{
        const { email, roomId } = data
        console.log('User', email, 'Joined Room', roomId)
        emailToSocketMap.set(email, socket.id)
        socketidToEmailMap.set(socket.id, email)
        io.to(roomId).emit("user:joined", {email, id: socket.id})
        socket.join(roomId)
        io.to(socket.id).emit("room:join", data)
    })

    socket.on("user:call", ({to, offer}) => {
      io.to(to).emit("incoming:call", {from: socket.id, offer})
    })

    socket.on("call:accepted", ({to, ans}) => { 
      io.to(to).emit("call:accepted", {from: socket.id, ans})
    })
})

const port = process.env.PORT || 5000


app.listen(port, () => console.log(`Server activated on port ${port}`))


