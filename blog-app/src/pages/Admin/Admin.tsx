import React from 'react'
import Category from './Category'
import Skills from './Skills'
import Project from './Project'

// Will manage all the admin related tasks like
// view, create, edit, delete categories
// view, create, edit, delete projects
// view, create, edit, delete skills
export default function Admin() {
  return (
    <div id='admin-page' className='content'>

        <h1>Hello Ahmed</h1>
        <p>Page to manage all the admin related activiates and only done by Ahmed</p>

        {/* Add the main categories here and other related admin */}
        <Category/>
        <Skills/>
        <Project/>

    </div>
  )
}