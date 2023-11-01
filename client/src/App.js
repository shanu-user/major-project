import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import AllRoutes from './AllRoutes'
// import { SocketProvider } from './Providers/Socket'
import { FcMenu } from "react-icons/fc"


function App() {
  const [isOk,setIsOk] = useState(false)

    const handleMenu = () =>{
        setIsOk(!isOk)
    }
  return (
    <div className="App">
      {/* <SocketProvider> */}
        <Navbar /> 
        <FcMenu onClick={handleMenu} size={20} style={{position: "absolute", left: 0}}/>
        <br />
        {isOk && <Sidebar />}
        <AllRoutes />
     {/*</SocketProvider> */}
    </div>
  );
}

export default App;
