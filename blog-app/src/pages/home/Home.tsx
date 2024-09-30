// import React, { useEffect, useState } from 'react'
import './home.css'
import linkedImg from '../../assets/linkedin.png'
import githubImg from '../../assets/github.png'
import kaggleImg from '../../assets/kaggle.svg'
import emailImg from '../../assets/email.png'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { findAllFrameworks, findAllProgrammingLanguages, findAllTools } from '../../api/profileService'
import { ISkill } from '../../types/skill'

// TODO: Create Home Page 
function Home() {


  // states
  // decalre types later
  const [ progLangs, setProgLangs] = useState<ISkill[] | []>([]);
  const [ frameworks, setFrameworks] = useState<ISkill[] | []>([]);
  const [ tools, setTools] = useState<ISkill[] | []>([]);



  // fetch from api
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
  };



    useEffect(() => {

      // fetch data from api

      const fetchData = () => {
        const apiProgLangs = findAllProgrammingLanguages();
        const apiFrameworks= findAllFrameworks();
        const apiTools= findAllTools();

        setProgLangs(apiProgLangs);
        setFrameworks(apiFrameworks);
        setTools(apiTools);
      }

      fetchData();
    }, [])






  return (
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
          <h2>
            Software Development industry is continuously evolving, and I enjoy to explore the latest!
          </h2>
        </div>

        <div className='tools-list-title'>
          <h3>Programmming languages I enjoy</h3>
        </div>

        <div className='tools-list'>
          {progLangs.map(el =>
            <div className='tool' key={el.id}>
              <div className='tool-img-container'>
                <img className='tool-img' src={el.icon} />
              </div>
              <div>
                <p className='tool-name'>{el.name}</p>
              </div>
            </div>
          )}

        </div>
      </div>

      <div className="tools">

        <div className='tools-list-title'>
          <h3>& Frameworks</h3>
        </div>

        <div className='tools-list'>
          {frameworks.map((el, idx) =>
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

        <div className='tools-list-title'>
          <h3>& Tools</h3>
        </div>

        <div className='tools-list'>
          {tools.map((el, idx) =>
            <div className='tool' key={idx}>
              <div className='tool-img-container'>
                <img className='tool-img' src={el.icon}></img>
              </div>
              <p className='tool-name'>{el.name}</p>
            </div>
          )}
        </div>
      </div>


    </div>

  )
}

export default Home