import React from 'react'
import './about.css'


type about = {
  name: "Ahmed",
  about: "Software Engineer with competence to convert descriptive requirements into scalable full stack web applications. An avid learner that keeps track of the latest technology using a simplified problem-solving approach, work ethics, and teamwork."
}


function About() {
  return (
    <div id='about'>
        About
        name {About.name}
      <h1>
        {About.name}
      </h1>
          
      <h2>
        Sofware Enginer
      </h2>

      <h4>

      </h4>
    </div>
  )
}

export default About