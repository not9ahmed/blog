import axios from "axios"
import { ISkill } from "../types/skill";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


/**
 * fetch categories from api
 * @returns Array of category with ICategory interface
 */
export const findAllSkills = async (): Promise<ISkill[]> => {

    try {
        const response = await axios.get(`${API_BASE_URL}/skills`);
        const data = response['data'] as ISkill[];

        // data.map(el => {
        //     el.createdDate =  new Date(el.createdDate)
        // })
        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }

}


/**
 * fetch single category by id from api
 * @returns Array of category with ICategory interface
 */
export const findSkillById = async (id: number): Promise<ISkill> => {

    try {
        const response = await axios.get(`${API_BASE_URL}/skills/${id}`);
        const data = response['data'] as ISkill;

        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}