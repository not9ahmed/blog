import axios from "axios"
import { ISkill, ISkillCreate, ISkillUpdate, ISkillBulk } from "../types/skill";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL
const SKILLS_URL: string = `${API_BASE_URL}/skills`


export const findAllSkills = async (): Promise<ISkill[]> => {

    try {
        const response = await axios.get(`${SKILLS_URL}`);
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


export const findSkillById = async (id: number): Promise<ISkill> => {

    try {
        const response = await axios.get(`${SKILLS_URL}/${id}`);
        const data = response['data'] as ISkill;

        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }
}


export const createSkill = async (skill: ISkillCreate): Promise<ISkill> => {
    
    try {
        const response = await axios.post(`${SKILLS_URL}`, skill);
        const data = response['data'] as ISkill;
        
        console.log('data', data);
        return data;

    } catch (err) {
        console.log(err);
        throw err;
    }
}


export const editSkill = async (id: number, skill: ISkillUpdate): Promise<ISkill> => {
    
    try {
        const response = await axios.put(`${SKILLS_URL}/${id}`, skill);
        const data = response['data'] as ISkill;

        console.log('data', data);
        return data;

    } catch (err) {
        console.log(err);
        throw err;
    }

}


export const deleteSkill = async (id: number): Promise<ISkill> => {
    
    try {
        const response = await axios.delete(`${SKILLS_URL}/${id}`);
        const data = response['data'] as ISkill;

        console.log('data', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


export const createBulkSkills = async (skilltypes: ISkill[]): Promise<ISkillBulk> => {
    
    try {
        const response = await axios.post(`${SKILLS_URL}`, skilltypes);
        const data = response ['data'] as ISkillBulk;

        console.log('data', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const deleteBulkSkills = async (): Promise<ISkillBulk> => {
    try {
        const response = await axios.delete(`${SKILLS_URL}/bulk`);
        const data = response ['data'] as ISkillBulk;

        console.log('data', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}