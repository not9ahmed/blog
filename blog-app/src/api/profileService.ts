// profile data will be here
import axios, { AxiosError } from 'axios'
import { SkillType, Skill } from '../types/skill';
// import { ProjectCreateInterface, ProjectEditInterface, ProjectInterface } from "../types/";



export const findAllProgrammingLanguages = (): Skill[] | [] => {

  const progType: SkillType = {
    id: 1,
    name: 'Programming Language'
  };

  const progs: Skill[] = [
      {id: 1, name:"Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg", link:'https://react.dev/', type: progType},
      {id: 2, name:"Node Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", link:'https://react.dev/', type: progType},
      {id: 3, name:"Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", link:'https://react.dev/', type: progType},
      {id: 4, name:"TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", link:'https://react.dev/', type: progType},
      {id: 5, name:"SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", link:'https://react.dev/', type: progType},
      {id: 6, name:"Oracle PL/SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg", link:'https://react.dev/', type: progType},
      {id: 7, name:" PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", link:'https://react.dev/', type: progType},
      {id: 8, name:"HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", link:'https://react.dev/', type: progType},
      {id: 9, name:"CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", link:'https://react.dev/', type: progType},
      {id: 10, name:"JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", link:'https://react.dev/', type: progType},
    ];


  return progs;

}



export const findAllFrameworks= (): Skill[] | [] => {


  const frameWorkType: SkillType = {
    id: 2,
    name: 'Framework Language'
  };

  const frameworks = [
      {id: 1, name:"Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", link:'https://react.dev/', type: frameWorkType},
      {id: 2, name:"React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", link:'https://react.dev/', type: frameWorkType},
      {id: 3, name:"Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", link:'https://react.dev/', type: frameWorkType},
      {id: 4, name:"FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", link:'https://react.dev/', type: frameWorkType},
      {id: 5, name:"Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", link:'https://react.dev/', type: frameWorkType},
      {id: 6, name:"Tensorflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", link:'https://react.dev/', type: frameWorkType},
    ];

  return frameworks;

}


export const findAllTools= (): Skill[] | [] => {


  const toolType: SkillType = {
    id: 3,
    name: 'Tool'
  };


  const tools: Skill[] = [
      {id: 1, name:"Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", link:'https://react.dev/', type: toolType},
      {id: 2, name:"Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", link:'https://react.dev/', type: toolType},
      {id: 3, name:"AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", link:'https://react.dev/', type: toolType},
    ];

  return tools;

}