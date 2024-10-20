import axios from "axios"
import { ISkillType, ISkillTypeBulk, ISkillTypeCreate, ISkillTypeEdit } from "../types/skillType";

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL
const SKILL_TYPES_URL: string = `${API_BASE_URL}/skilltypes`


/**
 * fetch skilltypes from api
 * @returns Array of category with ICategory interface
 */
export const findAllSkillTypes = async (): Promise<ISkillType[]> => {

    try {
        const response = await axios.get(`${SKILL_TYPES_URL}`);
        
        // TODO: Require better approach to map results for dates
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
 * Fetch single category by id from api
 * @param id 
 * @returns Array of skilltype of type ISkillType
 */
export const findSkillTypeById = async (id: number): Promise<ISkillType> => {

    try {
        const response = await axios.get(`${SKILL_TYPES_URL}/${id}`);
        const data = response['data'] as ISkillType;
        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}


export const createSkillType = async (skilltype: ISkillTypeCreate): Promise<ISkillType> => {

    try {
        const response = await axios.post(`${SKILL_TYPES_URL}`,
            skilltype
        );
        const data = response['data'] as ISkillType;
        console.log('data', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


export const updateSkillType = async (id: number, skillType: ISkillTypeEdit): Promise<ISkillType> => {
    
    try {
        const response = await axios.put(`${SKILL_TYPES_URL}/${id}`, skillType);
        const data = response ['data'] as ISkillType;
        return data;

    } catch (err) {
        console.log(err);
        throw err;
    }
}


export const deleteSkillType = async (id: number): Promise<ISkillType> => {
    
    try {
        const response = await axios.delete(`${SKILL_TYPES_URL}/${id}`);
        const data = response ['data'] as ISkillType;
        return data;

    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const createBulkSkillType = async (skilltypes: ISkillTypeCreate[]): Promise<ISkillTypeBulk> => {
    
    try {
        const response = await axios.post(`${SKILL_TYPES_URL}/bulk`, skilltypes)
        const data = response ['data'] as ISkillTypeBulk;
        return data;

    } catch (err) {
        console.log(err);
        throw err;
    }
}


export const deleteBulkSkillTypes = async (): Promise<ISkillTypeBulk> => {
    
    try {
        const response = await axios.delete(`${SKILL_TYPES_URL}/bulk`)
        const data = response ['data'] as ISkillTypeBulk;
        return data;

    } catch (err) {
        console.log(err);
        throw err;
    }
}