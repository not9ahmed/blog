import axios, { AxiosError } from 'axios'
import { ProjectCreateInterface, ProjectEditInterface, ProjectInterface } from "../types/project";
// import { ErrorResponse } from 'react-router-dom';

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


export const findAllProjects = async (): Promise<ProjectInterface[] | []> => {



    // axios call should be here for getting all posts
    // try {
        
    // } catch (error) {
        
    // }

    try {

       const response = await axios.get(`${API_BASE_URL}/projects/`)

    //    console.log(response)

       return response.data as ProjectInterface[]

    } catch(error) {

        // const errors = error as Error | AxiosError;


        console.log(error)
        // throw new Error()
        return []
    }


}