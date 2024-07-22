import axios from "axios"
import { Category, CategoryInterface } from "../types/category";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


// method to fetch categories from api
export const findAllCategories = (): Category[] => {


    const categories: Array<Category> = [
        {
            id: 1,
            name: 'Software Engineering',
            isEntertainment: false
        },
        {
            id: 2,
            name: 'Data Science',
            isEntertainment: false

        },
        {
            id: 3,
            name: 'Computer Science',
            isEntertainment: false

        },
        {
            id: 4,
            name: 'Music',
            isEntertainment: true
        },
        {
            id: 5,
            name: 'Books/Manga',
            isEntertainment: true
        },
        {
            id: 6,
            name: 'Shows/Movies',
            isEntertainment: true
        },

    ];

    console.log("categories", categories)

    return categories

    // try {

    // }catch(error){
    //     console.log(error)
    // }
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