import React from 'react'
import './home.css'
import Nav from '../../components/Nav/Nav'
import axios from 'axios'


function Home() {

  axios.get('https://api.sampleapis.com/baseball/hitsSingleSeason')
  .then(response => {

    console.log(response.data[0])
  })
  .catch(err => console.log(err))
  .finally(() => console.log("request done"))

  return (
    <>
      <Nav/>

      <div id='home'>
          Home Page
      </div>
    </>
  )
}

export default Home