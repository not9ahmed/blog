// import React, { useEffect, useState } from 'react'
import './home.css'
import linkedImg from '../../assets/linkedin.png'
import githubImg from '../../assets/github.png'
import emailImg from '../../assets/email.png'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import Button from '../../components/Button/Button'
import { ButtonInterface } from '../../components/Button/ButtonInterface'

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
    let progs = [
      {id: 1, lanaguage:"Java", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
      {id: 2, lanaguage:"Node Js", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
      {id: 3, lanaguage:"Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
      {id: 4, lanaguage:"TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
      {id: 5, lanaguage:"SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
      {id: 6, lanaguage:"PL/SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
      {id: 7, lanaguage:"HTML", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
      {id: 8, lanaguage:"CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
      {id: 9, lanaguage:"JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"},
    ]


  const home = {
    name: "Ahmed",
    job1: "Software Engineer",
    job2: "Data Scientist",
    about1: "I enjoy a lot of areas in software engieering, but I focus on full stack development and software design. ",
    about2: "Software Engineer with competence to convert descriptive requirements into scalable full stack web applications. An avid learner that keeps track of the latest technology using a simplified problem-solving approach, work ethics, and teamwork.",
    programmingLanguages: ["Java", "Node Js", "Python", "TypeScript", "SQL", "PL/SQL",  "HTML", "CSS", "JavaScript"],
    frameworks: ["Express Js", "Spring Boot", "React", "FastAPI", "Django", "TensorFlow"]
  
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
          <div className="section">
            <p>
              {home.about1}
            </p>
          </div>

          <div className="section">
            <p>
              {home.about2}
            </p>
          </div>
        </div>


        <div className='social'>
          <div className='social-links'>
            <Link to="https://github.com/not9ahmed/">
              <img src={githubImg} width={40} />
            </Link>
          </div>
          <div className='social-links'>
            <Link to="https://www.linkedin.com/in/ahmed-althawadi/">
              <img src={linkedImg} width={40} />
            </Link>
          </div>
          <div className='social-links'>
            <Link to="sample">
              <img src={emailImg} width={40} />
            </Link>
          </div>
        </div>


        <div className="tools">

          <div className='tools-title'>
            <h2>Programmming languages I enjoy using</h2>
          </div>

          <div className='tools-list'>
            {progs.map( (el, idx) => 
              <div className='tool' key={el.id}>
                <img width={40} src={el.icon}></img>
                <p>{el.lanaguage}</p>
              </div>
            )}

          </div>
        </div>
        
        <div className="tools">

          <div className='tools-title'>
            <h2>and Frameworks</h2>
          </div>

          <div className='tools-list'>
            {home.frameworks.map( (el, idx) => 
              <div className='tool' key={idx}>
                <img width={40} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"}></img>
                <p>{el}</p>
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