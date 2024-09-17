import { NextFunction, Request, Response } from 'express'
import CategoryService from '../services/category';
import { Category } from '@prisma/client';

const categoryService = new CategoryService();


export const findAllCategories = async (req: Request, res: Response) => {

    try {

        const categories = await categoryService.findAll();

        return res.status(200).json(categories);

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

        return res.status(200).json(category);
        
    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }
        return res.status(404).json(response);
    }
}


const createCategory = async (req: Request, res: Response) => {

    // add to the categories list

    try {

        const category = req.body;

        const createdCategory = await categoryService.create(category);

        return res.status(200).json(createdCategory);

    } catch(err) {
        const response = {
            message: `error occured`,
            error: err
        }
        return res.status(404).json(response);
    }
    

}


const updateCategory = async (req: Request, res: Response) => {


    try {


        const id = parseInt(req.params.id);

        const category = req.body

        const updatedCategory = await categoryService.update(id, category);

        return res.status(200).json(updatedCategory);
        
    } catch (err) {
        
        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
    }

}



const deleteCategory = async (req: Request, res: Response) => {

    try {
        
        const id = parseInt(req.params.id);

        const deletedCategory = await categoryService.delete(id);

        return res.status(200).json(deletedCategory);

    } catch (err) {
        
        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
    }
}


const createBulk  = async (req: Request, res: Response) => {

    try {

        const categories = req.body as Category[];

        const skillTypesCount = await categoryService.createMany(categories);

        return res.status(201).json(skillTypesCount);

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
            error: err
        }
        return res.status(404).json(response)
    }
}



module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    createBulk,
    deleteBulk
}