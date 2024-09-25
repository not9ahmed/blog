import axios from "axios"
import { ICategory } from "../types/category";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


// method to fetch categories from api
export const findAllCategories = async (): Promise<ICategory[]> => {

    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        const data = response['data'] as ICategory[];

        data.map(el => {
            el.createdDate =  new Date(el.createdDate)
        })
        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }

}