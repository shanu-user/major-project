import express from 'express'
import userRoutes from './routes/users.js'
import bodyParser from 'body-parser'
import {Server} from 'socket.io'
import dotenv from 'dotenv'
import cors from  'cors'
import connectDB from './connectDB.js'

dotenv.config()


//Handling DB connections
connectDB()
const io = new Server({
  cors: true
})

const app = express()
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use(bodyParser.json())




  // Use the connection for your queries
  // connection.query('SELECT * FROM your_table', (error, results, fields) => {
  //   if (error) {
  //     console.error('Error executing MySQL query:', error);
  //   } else {
  //     console.log('Query results:', results);
  //   }

  //   // Release the connection back to the pool when done
  //   connection.release();
  // });


//Handling API requests
app.post('/users', userRoutes)



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
