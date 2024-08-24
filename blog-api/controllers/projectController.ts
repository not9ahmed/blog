import express from 'express';
import { Request, Response } from 'express'
// import { createCategoryService, findAlCategoriesService, findCategoryByIdService } from '../services/project';
const categories = require('../db_scripts/categories.json');


export const findAllCategories = async (req: Request, res: Response) => {


    try {

        // const categories = await findAlCategoriesService();
        const categories = {};

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

