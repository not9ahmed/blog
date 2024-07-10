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
            tools: ["Python", "Django", "FastAPI", "PostgreSQL", "TensorFlow", "Sci-Kit Learn", "Keras", "Pandas"],
            link: "https://github.com/not9ahmed/blog"
        },
        {
            id: 2,
            name: "No More Yo3an",
            description: "Text",
            tools: ["React", "FastAPI", "MongoDB", "Bootstrap"],
            link: "https://github.com/not9ahmed/blog"
        },
        {
            id: 3,
            name: "Connect 4",
            description: "Text",
            tools: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/not9ahmed/blog"
        },
        {
            id: 4,
            name: "No More Yo3an",
            description: "Text",
            tools: ["Django", "FastAPI", ""],
            link: "https://github.com/not9ahmed/blog"
        },
        {
            id: 4,
            name: "No More Yo3an",
            description: "Text",
            tools: ["Django", "FastAPI", ""],
            link: "https://github.com/not9ahmed/blog"
        },
        {
            id: 4,
            name: "No More Yo3an",
            description: "Text",
            tools: ["Django", "FastAPI", ""],
            link: "https://github.com/not9ahmed/blog"
        },
        {
            id: 4,
            name: "No More Yo3an",
            description: "Text",
            tools: ["Django", "FastAPI", ""],
            link: "https://github.com/not9ahmed/blog"
        },
        {
            id: 4,
            name: "No More Yo3an",
            description: "Text",
            tools: ["Django", "FastAPI", ""],
            link: "https://github.com/not9ahmed/blog"
        },

    ]




  return (
    <div className='content'>
        <h1>Projects</h1>
        

        <div className='projects'>

        {projects.map(el => 
            <div className="project" key={el.id}>
                <img className='project-image' src='https://production-media.paperswithcode.com/datasets/Django-0000001059-57707917_hCcTMpx.jpg'/>
                <h4>{el.name}</h4>
                <h4>{el.description}</h4>

            </div>
        )}

        </div>
    </div>
  )
}

export default Projects