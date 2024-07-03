import React from 'react'
import './nav.css'

function Nav() {
  return (
    <div id="nav">
      <ul className='nav-list'>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Projects</a></li>
        <li><a>Experience</a></li>
      </ul>
    </div>
  )
}

export default Nav