import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to="/articles">Articles</Link><br />
        <Link to="/chat">Chat Room</Link><br />
        <Link to="/files">Files</Link><br />
        {/*Might be helpful for getting suggestions to patients or the doctors to how to use the platform*/}
        <Link to="/files">Notifications</Link><br />
    </div>
  )
}

export default Sidebar