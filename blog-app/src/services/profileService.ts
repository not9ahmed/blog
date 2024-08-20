// profile data will be here
import axios, { AxiosError } from 'axios'
// import { ProjectCreateInterface, ProjectEditInterface, ProjectInterface } from "../types/";



export const findAllProgrammingLanguages = (): Object[] | [] => {


        let progs = [
            {id: 1, lanaguage:"Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"},
            {id: 2, lanaguage:"Node Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"},
            {id: 3, lanaguage:"Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
            {id: 4, lanaguage:"TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
            {id: 5, lanaguage:"SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"},
            {id: 6, lanaguage:"Oracle PL/SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"},
            {id: 7, lanaguage:" PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},
            {id: 8, lanaguage:"HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
            {id: 9, lanaguage:"CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
            {id: 10, lanaguage:"JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
          ]


       return progs

}



export const findAllFrameworks= (): Object[] | [] => {

    let frameworks = [
        {id: 1, name:"Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"},
        {id: 2, name:"React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        {id: 3, name:"Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"},
        {id: 4, name:"FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"},
        {id: 5, name:"Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"},
        {id: 6, name:"Tensorflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"},
      ]

   return frameworks

}


export const findAllTools= (): Object[] | [] => {

    let tools = [
        {id: 1, name:"Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},
        {id: 2, name:"Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
        {id: 3, name:"AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
      ]

   return tools

}