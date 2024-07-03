import React from 'react'
import './projects.css'

function Projects() {


    // fetch projects from api

    type Project = {
        id: number,
        name: string,
        description: string,
        tools: string[],
        link: string
    }

    const projects: Array<Project> = [
        {
            id: 1,
            name: "AI Shopping System",
            description: "Text",
            tools: ["Django", "FastAPI", ""],
            link: "https://github.com/not9ahmed/blog"
        },

    ]




  return (
    <div id='projects'>
        
        Projects:

        {projects.map(el => 
        <div id="project" key={el.id}>
            <h6>{el.name}</h6>
            <h6>{el.description}</h6>

        </div>


        )}

    </div>
  )
}

export default Projects