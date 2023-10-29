import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to="/articles">Articles</Link><br />
        <Link to="/chat">Chat Room</Link><br />
        <Link to="/files">Files</Link><br />
    </div>
  )
}

export default Sidebar