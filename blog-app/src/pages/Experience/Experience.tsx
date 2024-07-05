import React from 'react'

function Experience() {


        // fetch projects from api

        type Experience = {
            id: number,
            position: string,
            organization: string,
            tasks: string[],
            projects: [""],
            tools: string[],
            orgImgs: string[]
        }
    
        const experiences: Array<Experience> = [
            {
                id: 1,
                position: "Assistant Analyst Programmer",
                organization: "IGA",
                tasks: ["Support"],
                projects: [""],
                tools: ["Java", "JSF"],
                orgImgs: [""]
            },
            {
                id: 2,
                position: "Assistant Analyst Programmer",
                organization: "CBB",
                tasks: ["Support"],
                projects: [""],
                tools: ["Java", "JSF"],
                orgImgs: [""]
            },
    
        ]
    


  return (
    <div className='content'>
        Experience


        <div className='experiences'>

        {experiences.map(el => 
            <div className="experience" key={el.id}>
                <img className='exp-image' src='https://production-media.paperswithcode.com/datasets/Django-0000001059-57707917_hCcTMpx.jpg'/>
                <h4>{el.position}</h4>
                <h4>{el.organization}</h4>

            </div>
        )}

        </div>


    </div>
  )
}

export default Experience