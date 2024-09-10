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
    body: {
        message: string;
        data: Project;
    }
}

interface ProjectBulkResponse extends Response {
    body: {
        message: string;
        data: Project[];
    }
}



const findAllProjects = async (req: ProjectBulkRequest, res: ProjectBulkResponse) => {

    try {
    
        const projects: Project[] = await projectService.findAll();
        
        const response = {
            message: "hello from all projects",
            data: projects
        };

        return res.status(200).json(response);

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
        
        const response = {
            message: "hello from all projects",
            data: project
        };

        return res.status(200).json(response);

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

        const response = {
            message: `Hello from create skill`,
            data: createdProject
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


const updateProject = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = parseInt(req.params.id);

        const project = req.body as Project;

        const updatedProject = await projectService.update(id, project);

        const response = {
            message: `Hello from update skill`,
            data: updatedProject
        };

        return res.status(201).json(response);
        
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

        const response = {
            message: `Hello from delete project`,
            data: deletedSkill
        };

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


const createBulkProjects = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const projects = req.body as Project[];

        const resultsCount = await projectService.createMany(projects);

        const response = {
            message: `Hello from create skill`,
            data: resultsCount
        }

        return res.status(201).json(response);

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


        const response = {
            message: `Hello from bulk delete skill`,
            data: resultsCount
        }

        return res.status(201).json(response);

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