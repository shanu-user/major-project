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
const io = new Server({
  cors: true
})


//Handling express setup
const app = express()
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use(bodyParser.json())




//Handling API requests
app.post('/users', userRoutes)




//Handling DB queries
export default db







//Handling socket communications
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

const port = process.env.PORT || 5000


app.listen(port, () => console.log("Server activated on port 8000"))
io.listen(8001)
