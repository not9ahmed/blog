import { NextFunction, Request, Response } from 'express'
import CategoryService from '../services/categoryService';
// const categoryService =  require('../services/categoryService');
// const categories = require('../db_scripts/data/categories.json');


const categoryService = new CategoryService();


export const findAllCategories = async (req: Request, res: Response) => {


    try {

        const categories = await categoryService.findAll();

        return res.status(200).json({
            message: "success",
            categories: categories

        });

    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
    }
}




const findCategoryById = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);

    try {

        const category = await categoryService.findById(id);

        return res.status(200).json({
            message: "Hello from categories controllers",
            category: category
        });
        
    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
    }
}


// const createCategory = async (req: Request, res: Response) => {

//     // add to the categories list

//     try {

//         const createdCategory = await categoryService.createCategoryService(req.body);
//         res.status(200).json({
//             message: "Hello from categories controllers",
//             createdCategory: createdCategory
//         });
//     } catch(e) {
//         res.status(404).json({
//             message: e,
//         });
//     }
    

// }


// const updateCategory = (req: Request, res: Response) => {


//     return res.status(200).json({
//         message: "ok"
//     });
// }


// const deleteCategory = (req: Request, res: Response): void => {

//     const id = req.params.id;




//     res.status(200).send({
//         message: `delete category by id ${id}`
//     });
// }


const createBulk  = async (req: Request, res: Response) => {

    try {

        const categories = req.body;

        const skillTypesCount = await categoryService.createMany(categories);


        const response = {
            message: "hello from find all skills",
            data: skillTypesCount
        }

        return res.status(201).json(response);

    } catch (err) {

        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
    }
}

const deleteBulk = async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const resultCount = await categoryService.deleteAll();

        console.log(resultCount);

        return res.status(201).json(resultCount);


    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }
        return res.status(404).json(response)
    }
}



module.exports = {
    findAllCategories,
    findCategoryById,
    // createCategory,
    // updateCategory,
    // deleteCategory,
    createBulk,
    deleteBulk
}