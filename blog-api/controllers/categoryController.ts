import express from 'express';
import { Request, Response } from 'express'
import { createCategoryService, findAlCategoriesService, findCategoryByIdService } from '../services/category';
const categories = require('../models/categories.json');


const findAllCategories = async (req: Request, res: Response) => {


    try {

        const categories = await findAlCategoriesService();

        return res.status(200).json({
            message: "success",
            categories: categories

        });

    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: "failed request"
        });
    }
}




const findCategoryById = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);

    try {

        const userCategory = req.body;

        const category = await findCategoryByIdService(id);

        return res.status(200).json({
            message: "Hello from categories controllers",
            category: category
        });
        
    } catch(e) {
        res.status(404).json({
            message: e,
        });
    }
}


const createCategory = async (req: Request, res: Response) => {

    // add to the categories list

    try {

        const createdCategory = await createCategoryService(req.body);
        res.status(200).json({
            message: "Hello from categories controllers",
            createdCategory: createdCategory
        });
    } catch(e) {
        res.status(404).json({
            message: e,
        });
    }
    

}


const updateCategory = (req: Request, res: Response) => {

    const id = req.params.id;


    res.status(200).json({
        message: `update category by id ${id}`
    });
}


const deleteCategory = (req: Request, res: Response): void => {

    const id = req.params.id;




    res.status(200).send({
        message: `delete category by id ${id}`
    });
}

module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}