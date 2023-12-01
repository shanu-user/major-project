import React from 'react'
import {Routes, Route } from 'react-router-dom'
// import Room from './pages/chat/Room'
import Dashboard from './pages/dashboard/Dashboard'
import Profile from './pages/Profile/Profile'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import Articles from './pages/articles/Articles'
import Chat from './pages/chat/Chat'
import Files from './pages/files/Files'




const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/files" element={<Files />}/>
        {/* <Route path="/room" element={<Room />}/> */}
      </Routes>
  )
}

export default AllRoutes