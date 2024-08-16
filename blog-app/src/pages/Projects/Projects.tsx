import React, { useEffect, useState } from 'react'
import './projects.css'
import { ProjectInterface } from '../../types/project'
import { findAllProjects } from '../../services/projectService'
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
            </div>


            <div className='projects-list'>

                {/* on project click go to blog post */}
                {projects.map(el =>
                    <div className="project" key={el.id} onClick={(e) => handleProjectClick(e, el.id)}>

                        <div className='project-img-container'>
                            <img className='project-img' src='https://miro.medium.com/v2/resize:fit:1155/1*ShVN4gYaP74Nlgpi1adBRw.png' />
                        </div>
                        
                        <div className='project-content'>
                            <h3>{el.name}</h3>
                            <p>{el.description}</p>

                            <div className='project-date'>
                                <p>start date: {new Date(el.startDate).toDateString()}</p>
                                <p>start date: {new Date(el.completeDate).toDateString()}</p>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Projects