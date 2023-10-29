import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { FcMenu } from "react-icons/fc"
import Sidebar from './components/Sidebar/Sidebar'
import AllRoutes from './AllRoutes'
function App() {
  const [isok,setIsOk] = useState(false)

  const handleMenu = () =>{
    setIsOk(!isok)
  }
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="sidebar">
      <FcMenu onClick={handleMenu} size={20} style={{position: "absolute", left: 0}}/>
        {/* Hospital App */}
        <br />
        {isok && <Sidebar />}
      </div>
      <AllRoutes />
    </div>
  );
}

export default App;
