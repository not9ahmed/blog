import axios from "axios"
import { ISkillType } from "../types/skill";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


/**
 * fetch categories from api
 * @returns Array of category with ICategory interface
 */
export const findAllSkillTypes = async (): Promise<ISkillType[]> => {

    try {
        const response = await axios.get(`${API_BASE_URL}/skilltypes`);
        const data = response['data'] as ISkillType[];

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
export const findSkillTypeById = async (id: number): Promise<ISkillType> => {

    try {
        const response = await axios.get(`${API_BASE_URL}/skilltypes/${id}`);
        const data = response['data'] as ISkillType;

        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}