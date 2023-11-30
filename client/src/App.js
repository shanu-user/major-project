import React, {useState } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
// import Navbar_duplicate from './components/Navbar_duplicate/Navbar_duplicate'
import front_img from './assets/Front_Page_Image.jpeg'
import login_img from './assets/Login_Background.jpeg'
import AllRoutes from './AllRoutes'
import { SocketProvider } from './Providers/Socket'


function App() {

  const location = useLocation()
 

  return (
    <div className="App img-responsive" style={{background: `url(front_img)`, backgroundSize: 'cover', backgroundPosition: 'fixed', overflow: 'hidden', backgroundRepeat: 'no-repeat'}}>
      <SocketProvider>
      <Navbar />  
      <div className="home_page">
        <AllRoutes />
      </div> 
     </SocketProvider>
    </div>
  );
}

export default App;
