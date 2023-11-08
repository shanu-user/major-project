import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"
import { FcSearch } from 'react-icons/fc'


const Navbar = () => {   

    const [isLogin, setIsLogin] = useState(false)

    return (
        <nav>
            <div className="navbar">
                
                <div className="navbar-1">
                    <Link className="nav_link" to="/articles">Articles</Link>
                    <Link className="nav_link" to="/chat">Chat</Link>
                    <Link className="nav_link" to="/files">Files</Link>
                </div>
                <div className="navbar-2">
                   <button className="btn_login">
                    <Link className="nav_link" style={{color: 'white'}}>Log In</Link>
                   </button> 
                </div>
            </div>
        </nav>
    )    
    
}

export default Navbar