import React, { useEffect, useState } from 'react'
import './projects.css'
import { IProject, ProjectInterface } from '../../types/project'
import { findAllProjects } from '../../api/projectService'
import { useNavigate } from 'react-router-dom';

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
    const [projects, setProjects] = useState<IProject[]>([]);


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



    const navigate = useNavigate();



    const handleProjectClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
        navigate(`/projects/${id}`)
    }



    if (isLoading) {
        return(
            <div>
                Is Loading...
            </div>    
        )
    }

    if (error) {
        return (
            <div>
                Something went wrong
            </div>
        )
    }

    return (
        <div id='projects' className='content'>


            <div className='projects-title'>
                <h1>Projects</h1>
                <p>Here are the projects done by me:</p>
            </div>


            <div className='projects-list'>

                {/* on project click go to blog post */}
                {projects.map(el =>
                    <div className="project-card" key={el.id} onClick={(e) => handleProjectClick(e, el.id)}>

                        <div className='project-img-container'>
                            <img className='project-img' src={el.images[0]} />
                        </div>
                        
                        <div className='project-content'>
                            <h3>{el.name}</h3>
                            <p>{el.description}</p>

                            <div className='project-date'>
                                <p>start date: {new Date(el.startDate).toDateString()}</p>
                                {el.completeDate?
                                    (<p>complete date: {new Date(el.completeDate).toDateString()}</p>)
                                :(<p>Not Complete</p>)
                                }
                                <p>status: {el.status}</p>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Projects