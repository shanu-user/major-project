import React, {useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import AllRoutes from './AllRoutes'
import { SocketProvider } from './Providers/Socket'
function App() {

  const [isOk,setIsOk] = useState(false)

  const handleMenu = () =>{
    setIsOk(!isOk)
  } 


  

  return (
    <div className="App">
      <SocketProvider>
      <Navbar handleMenu={handleMenu}/>
      <div className="home_page">
        {isOk && <Sidebar />}
        <AllRoutes />
      </div> 
     </SocketProvider>
    </div>
  );
}

export default App;
