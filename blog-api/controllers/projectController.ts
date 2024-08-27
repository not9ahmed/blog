import express from 'express';
import { Request, Response } from 'express'
// import { createCategoryService, findAlCategoriesService, findCategoryByIdService } from '../services/project';
const projects = require('../db_scripts/data/projects.json');


export const findAllProjects = async (req: Request, res: Response) => {


    try {

        // const categories = await findAlCategoriesService();
        // const projects = {};

        return res.status(200).json({
            message: "success",
            projects: projects

        });

    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: "failed request"
        });
    }
}

