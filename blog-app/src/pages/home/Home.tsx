import React, { useEffect, useState } from 'react'
import './home.css'
import linkedImg from '../../assets/linkedin.png'
import githubImg from '../../assets/github.png'
import emailImg from '../../assets/email.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { ButtonInterface } from '../../components/Button/ButtonInterface'

// TODO: Create Home Page 
function Home() {
  


  useEffect(() => {
    // sample axios call
    axios.get('https://api.sampleapis.com/baseball/hitsSingleSeason')
    .then(response => {
  
      console.log(response.data[0])
    })
    .catch(err => console.log(err))
    .finally(() => console.log("request done"))
  }, [])


  const buttonProps1: ButtonInterface = {
    id: 123,
    value: "Button One",
    colors: "primary"
}

  const buttonProps2: ButtonInterface = {
    id: 123,
    value: "Button Two",
    colors: "secondary"
}


  let home = {
    name: "Ahmed",
    job1: "Software Engineer",
    job2: "Data Scientist",
    about: "Software Engineer with competence to convert descriptive requirements into scalable full stack web applications. An avid learner that keeps track of the latest technology using a simplified problem-solving approach, work ethics, and teamwork."
  }


  return (
    <>
    <div id='home' className='content'>


      {/* will have more sections */}
      {/* <div className='section'>


      </div> */}
      {/* <Nav/> */}
      <h1 id='title'>
        Hi! I'm {home.name}
      </h1>
  
      <h2>{home.job1} | {home.job2}</h2>

      <p>
        {home.about}
      </p>

      <div className='social-links'>
        <div>
          <Link to="https://github.com/not9ahmed/">
            <img src={githubImg} width={40}/>
          </Link> 
        </div>
        <div>
          <Link to="https://www.linkedin.com/in/ahmed-althawadi/">
            <img src={linkedImg} width={40}/>
          </Link> 
        </div>
        <div>
          <Link to="sample">
            <img src={emailImg} width={40}/>
          </Link>
        </div>
      </div>



        {/* conditional rendering of button */}
        <Button {...buttonProps1} />
        <Button {...buttonProps2} />
        
    </div>
    
    </>
  )
}

export default Home