import axios from "axios"
import { ICategory, ICategoryCreate, ICategoryUpdate} from "../types/category";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL;
const CATEGORIES_URL: string = `${API_BASE_URL}/categories`


// method to fetch categories from api
export const findAllCategories = async (): Promise<ICategory[]> => {

    try {
        const response = await axios.get(`${CATEGORIES_URL}`);
        const data = response['data'] as ICategory[];

        data.map(el => {
            el.createdDate =  new Date(el.createdDate)
        })
        // console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }

}

export const findCategoryById = async (id: number): Promise<ICategory> => {
    try {
        const response = await axios.get(`${CATEGORIES_URL}/${id}`);
        const data = response['data'] as ICategory;
        // console.log('data', data);
        return data;

    } catch (err) {

        console.log(err);
        throw err;

    }
}


export const createCategory = async (category: ICategoryCreate): Promise<ICategory> => {
    try {
        const response = await axios.post(`${CATEGORIES_URL}/`,
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


export const updateCategory = async (id: number, category: ICategoryUpdate): Promise<ICategory> => {
    try {
        const response = await axios.put(`${CATEGORIES_URL}/${id}`,
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


export const deleteCategory = async (id: number): Promise<ICategory> => {
    try {
        const response = await axios.delete(`${CATEGORIES_URL}/${id}`);
        const data = response['data'] as ICategory;
        console.log('data', data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}