import React from 'react'
import { Link } from 'react-router-dom'
import { MdArticle, MdChat, MdFilePresent, MdCircleNotifications } from 'react-icons/md'
import "./Sidebar.css"


const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to="/articles" className="sidebar_link">
          <MdArticle style={{color: 'black'}}/>
          Articles
        </Link><br />
        <Link to="/chat" className="sidebar_link">
          <MdChat style={{color: 'black'}}/>
          Chat
        </Link><br />
        <Link to="/files" className="sidebar_link">
          <MdFilePresent style={{color: 'black'}}/>
          Files
        </Link><br />
        <Link to="/files" className="sidebar_link">
          <MdCircleNotifications style={{color: 'black'}}/>
          Notifications
        </Link><br />
    </div>
  )
}

export default Sidebar