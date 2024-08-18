import React, { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import { findProjectById } from '../../services/projectService';
import { ProjectInterface } from '../../types/project';
import './project.css'

function Project() {


  const params: Readonly<Params<string>> = useParams();


  const id: number | undefined = Number(params.id);


  console.log(params);
  console.log(id);


  const [project, setProject] = useState<ProjectInterface>();

  useEffect(()=> {

    const fetchData = async () =>  {
      
      try {

        const fetchedProject = await findProjectById(id);
  
        setProject(fetchedProject);
        console.log("fetchedProject", fetchedProject);
        console.log("project", project);

      } catch(err: any) {
        console.log(err)
      }

    };


    
    fetchData();
    // console.log(project);

  },[])

  return (
    <div className='content'>
    
      <div className='project'>

        <div className='project-heading'>
            <h1 className='project-title'>{project?.name}</h1>
            <h2 className='project-detailed-description'>{project?.description}</h2>
            <h3 className='project-timestamp'>{project?.startDate? project?.startDate.toString() : ""}</h3>
          </div>

          <div className='project-main-area'>
              {/* <img
              className='project-main-image'
                src={project?.images[0]}
                alt="image not found"
              /> */}
              
            <div className='post-content'>
              <p>
                {project?.description}
              </p>
            </div>
          </div>

      </div>
        
    </div>
  )
}

export default Project