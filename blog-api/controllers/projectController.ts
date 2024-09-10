import { Project } from '@prisma/client';
import { Request, Response, NextFunction } from 'express'
import ProjectService from '../services/project';
const projects = require('../db_scripts/data/projects.json');


const projectService = new ProjectService();

interface ProjectRequest extends Request {
    body: Project;
}

interface ProjectBulkRequest extends Request {
    body: Project[];
}

interface ProjectResponse extends Response {
    body: Project;
}

interface ProjectBulkResponse extends Response {
    body: Project[];
}



const findAllProjects = async (req: ProjectBulkRequest, res: ProjectBulkResponse) => {

    try {
    
        const projects: Project[] = await projectService.findAll();

        return res.status(200).json(projects);

     // based on error thrown which is from PRISMA I can find what caused it
    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }

}


const findProjectById = async (req: ProjectRequest, res: Response, next: NextFunction) => {
    
    try {
    
        const id = parseInt(req.params.id);

        const project: Project = await projectService.findById(id);

        return res.status(200).json(project);

     // based on error thrown which is from PRISMA I can find what caused it
    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }
}


const createProject = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const project = req.body as Project;

        const createdProject = await projectService.create(project);

        return res.status(201).json(createdProject);

    } catch (err) {

        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
        
    }
}


const updateProject = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = parseInt(req.params.id);

        const project = req.body as Project;

        const updatedProject = await projectService.update(id, project);

        return res.status(201).json(updatedProject);
        
    } catch (err) {

        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }
}


const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        
        const id = parseInt(req.params.id);

        const deletedSkill = await projectService.delete(id);

        return res.status(201).json(deletedSkill);

    } catch (err) {
        
        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
    }
}


const createBulkProjects = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const projects = req.body as Project[];

        const resultsCount = await projectService.createMany(projects);

        return res.status(201).json(resultsCount);

    } catch (err) {

        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
        
    }
}


const deleteBulkProjects = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const resultsCount = await projectService.deleteAll();

        return res.status(201).json(resultsCount);

    } catch (err) {
        console.log(err);

        const response = {
            message: `error occured in bulk`,
            error: err
        }

        return res.status(404).json(response)
    }
}





module.exports = {
    findAllProjects,
    findProjectById,
    createProject,
    updateProject,
    deleteProject,
    createBulkProjects,
    deleteBulkProjects
}