import React from 'react'
import "./Files.css"
import { FaFileUpload } from 'react-icons/fa'
import { FaFile } from 'react-icons/fa6'
// import { FaShare } from 'react-icons/fa6'

const Files = () => {
  return (
    <div className="files">
        <h1>Files</h1>
        <div className="tag-list">
            <div className="tags">
              <FaFileUpload />
              Add Files
            </div>
            <div className="tags">
              <FaFile />
              All Files
            </div>
            <div className="tags">Video Sharing</div>
            <div className="tags">Photos Sharing</div>
        </div>
    </div>
  )
}

export default Files