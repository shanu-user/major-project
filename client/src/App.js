import React, {useState } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
// import Navbar_duplicate from './components/Navbar_duplicate/Navbar_duplicate'
import front_img from './assets/Front_Page_Image.jpeg'
import login_img from './assets/Login_Background.jpeg'
import Sidebar from './components/Sidebar/Sidebar'
import AllRoutes from './AllRoutes'
import { SocketProvider } from './Providers/Socket'
function App() {

  const location = useLocation()
  const [isOk,setIsOk] = useState(false)

  function getStyleForRoute(pathname)
  {
    switch(pathname){
      case '/':
        return `url(${front_img})`
      case '/login':
        return `url(${login_img})` 
      case '/signup':
        return 'E38080'
      default:
        return `url(${front_img})`
    }
  }
  const handleMenu = () =>{
    setIsOk(!isOk)
  } 

  return (
    <div className="App" style={{background: `url(${getStyleForRoute(location.pathname)})`, backgroundSize: 'cover', backgroundPosition: 'fixed', overflow: 'hidden', backgroundRepeat: 'no-repeat'}}>
      <SocketProvider>
      <Navbar handleMenu={handleMenu} />  
      <div className="home_page">
        {isOk && <Sidebar />}
        <AllRoutes />
      </div> 
     </SocketProvider>
    </div>
  );
}

export default App;
