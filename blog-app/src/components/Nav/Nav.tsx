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
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          {/* <a>Experience</a> */}
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav