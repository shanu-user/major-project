import React from 'react'
import {Routes, Route } from 'react-router-dom'
// import Room from './pages/chat/Room'
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/Profile/Profile'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import Articles from './pages/articles/Articles'
import Chat from './pages/chat/Chat'
import Room from './pages/chat/Room'
import Register from './pages/Register/Register'




const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/room/:roomId" element={<Room />}/>
        {/* <Route path="/room" element={<Room />}/> */}
      </Routes>
  )
}

export default AllRoutes