import React from 'react'
import { Experience } from '../../types/experience'

function Experience() {


        // fetch projects from api

    
        const experiences: Array<Experience> = [
            {
                id: 1,
                position: "IT Trainee",
                organization: "Information & eGovernment Authority",
                startDate: new Date(),
                endDate: new Date(),
                tasks: [
                    "Developed a Dashboard POC with Microsoft Power BI integrated with Microsoft Intune as a Data Source",
                ],
                projects: [
                    "Power BI Dashboard"
                ],
                tools: [
                    "Power BI",
                    "JSF"
                ],
                orgImgs: [""]
            },
            {
                id: 2,
                position: "Analyst Programmer",
                organization: "Central Bank of Bahrain",
                startDate: new Date(),
                endDate: new Date(),
                tasks: [
                    "Developed small web application to digitalize process",
                    "Provided technical support for Entrprise Systems (Accounts, HR & Adminstration)",
                ],
                projects: [
                    "D"
                ],
                tools: [
                    "Java",
                    "JSF (Java Server Faces)",
                    "PrimeFaces",
                    "SQL",
                    "PL/SQL",

                ],
                orgImgs: [""]
            },
    
        ]
    


  return (
    <div className='content'>

        <h1>Experiences Page</h1>

        <div className='experiences'>

        {experiences.map(el => 
            <div className="experience" key={el.id}>
                <img className='exp-image' src={el.orgImgs[0]} alt='no image'/>
                <h4>{el.position}</h4>
                <h4>{el.organization}</h4>

            </div>
        )}

        </div>


    </div>
  )
}

export default Experience