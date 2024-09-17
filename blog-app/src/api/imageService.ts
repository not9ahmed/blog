import axios from "axios"
import { ICategory } from "../types/category";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


// method to fetch categories from api
export const createImage = async (): Promise<ICategory[]> => {

    console.log("create image service");

    try {
        const { data } = await axios.post(`${API_BASE_URL}/images`, {

        });
        console.log('data', data);
        return data;
    } catch(err) {
        console.log(err);
        throw err;
    }

}
