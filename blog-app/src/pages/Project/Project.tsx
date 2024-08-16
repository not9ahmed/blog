import React from 'react'
import { Params, useParams } from 'react-router-dom'

function Project() {


  const params: Readonly<Params<string>> = useParams();


  const id: number | undefined = Number(params.id);


  console.log(params);
  console.log(id);


  return (
    <div id='project' className='content'>
    
      <h1>
        Project
      </h1>
        
    </div>
  )
}

export default Project