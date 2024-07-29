import React, { useEffect, useState } from 'react'
import './projects.css'
import { ProjectInterface } from '../../types/project'
import { findAllProjects } from '../../services/projectService'

function Projects() {


    // fetch projects from api

    // interface Project {
    //     id: number,
    //     name: string,
    //     description: string,
    //     tools: string[],
    //     link: string
    // }
    // useEffect axios


    // handling loading of data
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [projects, setProjects] = useState<ProjectInterface[]>([]);


    useEffect(() => {


        // callback function which call the projectsService
        const fetchProjects = async () => {

            // before fetching data set is loading to true
            setIsLoading(true);

            try {

                const projects = await findAllProjects();
                console.log(projects);
    
                setProjects(projects);
    
            } catch(e: any) {

                setError(e);

            } finally {
                // after fetching data set is loading to false
                setIsLoading(false);

            }

        }


        fetchProjects();
    }, []);

    if (isLoading) {
        return
        <div>
            Is Loading...
        </div>
    }

    if (error) {
        return
        <div>
            Something went wrong
        </div>
    }

    return (
        <div className='content'>
            <h1>Projects</h1>


            <div className='projects'>

                {projects.map(el =>
                    <div className="project" key={el.id}>
                        <img className='project-image' src='https://production-media.paperswithcode.com/datasets/Django-0000001059-57707917_hCcTMpx.jpg' />
                        <h4>{el.name}</h4>
                        <h4>{el.description}</h4>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Projects