import React, { useState } from 'react'
import "./Navbar.css"
import { FcMenu } from 'react-icons/fc'
const Navbar = ({handleMenu}) => {   

    return (
        <div className="navbar">
            <FcMenu onClick={handleMenu} size={20} style={{position: "absolute", left: 0}}/>
            <span>Navbar</span>
            <ul className="item-list">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
            
        </div>
    )
}

export default Navbar