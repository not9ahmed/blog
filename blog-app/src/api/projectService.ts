import axios, { AxiosError } from 'axios'
import { IProject, IProjectCreate, IProjectUpdate } from "../types/project";
// import { ErrorResponse } from 'react-router-dom';

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL


export const findAllProjects = async (): Promise<IProject[]> => {



    // axios call should be here for getting all posts

    try {

       const response = await axios.get(`${API_BASE_URL}/projects/`)

    //    console.log(response)

       return response.data as IProject[]

    } catch(err) {

        // const errors = error as Error | AxiosError;


        console.log(err);
        // throw new Error()
        throw err
    }


}


export const findProjectById = async (id: number): Promise<IProject>  => {




    try {

        const response = await axios.get(`${API_BASE_URL}/projects/${id}`)


        const data = response.data as IProject;

        return data


    } catch(err) {
        throw err;
    }

}