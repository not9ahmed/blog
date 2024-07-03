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

  return (
    <>
    <div id='home'>
      {/* <Nav/> */}
      Home Page
    
    </div>
    
    </>
  )
}

export default Home