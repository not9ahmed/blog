import express from 'express';
import { Request, Response } from 'express'
import { createCategoryService } from '../services/category';
const categories = require('../models/categories.json');


const findAllCategories = (req: Request, res: Response) => {

    res.status(200).send(categories);
}

const findCategoryById = (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    

    const category = categories[id-1];

    res.status(200).send(category);
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