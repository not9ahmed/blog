import axios from 'axios'
import { ProjectCreateInterface, ProjectEditInterface, ProjectInterface } from "../types/project";
import { ErrorResponse } from 'react-router-dom';

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


export const findAllProjects = async (): Promise<ProjectInterface[] | undefined> => {



    // axios call should be here for getting all posts
    // try {
        
    // } catch (error) {
        
    // }

    try {

       const response = await axios.get(`${API_BASE_URL}/projects/`)

       console.log(response)

       return response.data

    } catch(error) {

        console.log(error)
        return undefined
    }


}