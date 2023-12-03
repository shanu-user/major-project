import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"
import { FcSearch } from 'react-icons/fc'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap"


const Navbar = () => {   

    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()


    return (
        <nav className="navbar navbar-light w-auto" style={{backgroundColor: "rgba(217, 217, 217, 0.00)", height: 53}}>
            
            <ul className="navbar-nav mb-2 me-auto mb-lg-0" style={{display: "flex", flexDirection: "row"}}>
                <li className="nav-item px-2">
                    <Link className="nav-link" style={{fontFamily: "inter"}} to="/articles">Articles</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" style={{fontFamily: "inter"}} to="/chat">Chat</Link>
                </li>
            </ul>
            <Button type="button" onClick={() => navigate('/login')} className="btn btn-warning me-5" style={{fontFamily: 'inter'}}>Log in</Button>
            
        </nav>
    )    
    
}

export default Navbar