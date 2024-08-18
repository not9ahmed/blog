// import React, { useEffect, useState } from 'react'
import './home.css'
import linkedImg from '../../assets/linkedin.png'
import githubImg from '../../assets/github.png'
import kaggleImg from '../../assets/kaggle.svg'
import emailImg from '../../assets/email.png'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import Button from '../../components/Button/Button'
// import { ButtonInterface } from '../../components/Button/ButtonInterface'

// TODO: Create Home Page 
function Home() {




  //   const buttonProps1: ButtonInterface = {
  //     id: 123,
  //     value: "Button One",
  //     colors: "primary"
  // }

  //   const buttonProps2: ButtonInterface = {
  //     id: 123,
  //     value: "Button Two",
  //     colors: "secondary"
  // }


    // can be used instead of home.programmingLanguages
    // fetch from api
    let progs = [
      {id: 1, lanaguage:"Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"},
      {id: 2, lanaguage:"Node Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"},
      {id: 3, lanaguage:"Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
      {id: 4, lanaguage:"TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
      {id: 5, lanaguage:"SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"},
      {id: 6, lanaguage:"Oracle PL/SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"},
      {id: 7, lanaguage:" PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},
      {id: 8, lanaguage:"HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
      {id: 9, lanaguage:"CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
      {id: 10, lanaguage:"JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    ]


    // fetch from api
    let frameworks = [
      {id: 1, name:"Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"},
      {id: 2, name:"React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
      {id: 3, name:"Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"},
      {id: 4, name:"FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"},
      {id: 5, name:"Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"},
      {id: 6, name:"Tensorflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"},
    ]


    // fetch from api
    let tools = [
      {id: 1, name:"Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},
      {id: 2, name:"Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
      {id: 3, name:"AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
    ]


    const home = {
      name: "Ahmed",
      job1: "Software Engineer",
      job2: "Data Scientist",
      about: [
        "I enjoy a lot of areas in software engieering, but I focus on full stack development and software design. ",
        "Data science is also my interest ",
        "Software Engineer with competence to convert descriptive requirements into scalable full stack web applications. An avid learner that keeps track of the latest technology using a simplified problem-solving approach, work ethics, and teamwork."
      ],
      programmingLanguages: ["Java", "Node Js", "Python", "TypeScript", "SQL", "PL/SQL",  "HTML", "CSS", "JavaScript"],
      frameworks: ["Express Js", "React", "Spring Boot", "FastAPI", "Django", "TensorFlow"],
      tools: ["Github", "Git", "AWS"]
    }








  return (
    <>
      <div id='home' className='content'>

        <div className='title'>

          <h1 id='title-text'>
            Hi! I'm {home.name}
          </h1>

        </div>

        <div className='profession'>
          <h2>{home.job1} | {home.job2}</h2>
        </div>

        <div className='about'>

          {home.about.map((el, idx) => 

            <div className="section" key={idx}>
              <p>
                {el}
              </p>
            </div>
            
            )}

        </div>


        <div className='social-container'>
          <div className='social-title'>
            <h2>My Socials</h2>
          </div>
          <div className='social-links'>

            <div className='social-link'>
              <Link to="https://github.com/not9ahmed/">
                <img src={githubImg} width={40} />
              </Link>
            </div>
            <div className='social-link'>
              <Link to="https://www.kaggle.com/notahmed">
                <img src={kaggleImg} width={40} />
              </Link>
            </div>
            <div className='social-link'>
              <Link to="https://www.linkedin.com/in/ahmed-althawadi/">
                <img src={linkedImg} width={40} />
              </Link>
            </div>
            <div className='social-link'>
              <Link to="sample">
                <img src={emailImg} width={40} />
              </Link>
            </div>

          </div>
        </div>


        <div className="tools">

          <div className='tools-title'>
            <h2>Programmming languages I enjoy</h2>
          </div>

          <div className='tools-list'>
            {progs.map( el => 
              <div className='tool' key={el.id}>
                <div className='tool-img-container'>
                  <img className='tool-img' src={el.icon} />
                </div>
                <div>
                  <p className='tool-name'>{el.lanaguage}</p>
                </div>
              </div>
            )}

          </div>
        </div>
        
        <div className="tools">

          <div className='tools-title'>
            <h2>& Frameworks</h2>
          </div>

          <div className='tools-list'>
            {frameworks.map( (el, idx) => 
              <div className='tool' key={idx}>
                <div className='tool-img-container'>
                  <img className='tool-img' src={el.icon} />
                </div>
                <p className='tool-name'>{el.name}</p>
              </div>
            )}

          </div>
        </div>
        
        <div className="tools">

          <div className='tools-title'>
            <h2>& Tools</h2>
          </div>

          <div className='tools-list'>
            {tools.map( (el, idx) => 
              <div className='tool' key={idx}>
                <div className='tool-img-container'>
                  <img className='tool-img' src={el.icon}></img>
                </div>
                <p className='tool-name'>{el.name}</p>
              </div>
            )}

          </div>
        </div>



        {/* conditional rendering of button
        <Button {...buttonProps1} />
        <Button {...buttonProps2} /> */}

      </div>

    </>
  )
}

export default Home