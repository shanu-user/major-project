import React from 'react'
import {Routes, Route } from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import Articles from './pages/articles/Articles'
import Chat from './pages/chat/Chat'
import Files from './pages/files/Files'
//import Dashboard from './pages/Dashboard'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/articles" element={<Articles />}/>
      <Route path="/chat" element={<Chat />}/>
      <Route path="/files" element={<Files />}/>
      <Route />
    </Routes>
  )
}

export default AllRoutes