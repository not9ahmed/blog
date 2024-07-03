import React from 'react'
import './home.css'
import Nav from '../../components/Nav/Nav'
import axios from 'axios'

// TODO: Create Home Page 
function Home() {
  

  // sample axios call
  axios.get('https://api.sampleapis.com/baseball/hitsSingleSeason')
  .then(response => {

    console.log(response.data[0])
  })
  .catch(err => console.log(err))
  .finally(() => console.log("request done"))



  let home = {
    name: "Ahmed",
    job1: "Software Engineer",
    job2: "Data Scientist",
    about: "Software Engineer with competence to convert descriptive requirements into scalable full stack web applications. An avid learner that keeps track of the latest technology using a simplified problem-solving approach, work ethics, and teamwork."
  }


  return (
    <>
    <div id='home'>
      {/* <Nav/> */}
      <h1 id='title'>
        Hi! I'm {home.name}
      </h1>
  
      <h2>{home.job1}</h2>

      <h2>{home.job2}</h2>

      <h4>{home.about}</h4>
    </div>
    
    </>
  )
}

export default Home