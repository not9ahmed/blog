import axios from "axios"
import { Category, CategoryInterface } from "../types/category";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


// method to fetch categories from api
export const findAllCategories = async (): Promise<CategoryInterface[]> => {

    console.log("find all categories service");

    try {
        const { data } = await axios.get(`${API_BASE_URL}/categories`);
        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }

}



export const findCategoryById = (id: string): Category | undefined => {


    return undefined;
}


export const updateCategoryById = (id: string): Category | undefined => {


    return undefined;
}

export const deleteCategoryById = (id: string): Category | undefined => {


    return undefined;
}