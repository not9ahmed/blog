import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div id="nav">
      <ul className='nav-list'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          {/* <a>Experience</a> */}
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav