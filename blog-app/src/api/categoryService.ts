import axios from "axios"
import { ICategory, ICategoryCreate, ICategoryUpdate} from "../types/category";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


// method to fetch categories from api
export const findAllCategories = async (): Promise<ICategory[]> => {

    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        const data = response['data'] as ICategory[];
        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }

}

export const findCategoryById = async (id: number): Promise<ICategory> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
        const data = response['data'] as ICategory;
        console.log('data', data);
        return data;

    } catch (err) {

        console.log(err);
        throw err;

    }
}


export const createCategory = async (category: ICategoryCreate): Promise<ICategory> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/categories/`,
            category
        );
        const data = response['data'] as ICategory;
        console.log('data', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


export const updateCategoryById = async (id: string, category: ICategoryUpdate): Promise<ICategory> => {
    try {
        const response = await axios.put(`${API_BASE_URL}/categories/${id}`,
            category
        );
        const data = response['data'] as ICategory;
        console.log('data', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const deleteCategoryById = async (id: number): Promise<ICategory> => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/categories/${id}`);
        const data = response['data'] as ICategory;
        console.log('data', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}