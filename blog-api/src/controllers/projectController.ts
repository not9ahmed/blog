import { Request, Response, NextFunction } from 'express'
import ProjectService from '../services/project';
import { IProject, IProjectCreate, IProjectUpdate } from '../types/project';
import { errorHandler } from '../errors/controllerError';

const projectService = new ProjectService();

const findAll = async (req: Request, res: Response) => {

    try {
    
        const projects: IProject[] = await projectService.findAll();

        return res.status(200).json(projects);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);

    }

}


const findById = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
    
        const id = parseInt(req.params.id);

        const project: IProject = await projectService.findById(id);

        return res.status(200).json(project);

     // based on error thrown which is from PRISMA I can find what caused it
    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);

    }
}


const create = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const project = req.body as IProjectCreate;

        const createdProject = await projectService.create(project);

        return res.status(201).json(createdProject);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);

    }
}


const update = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = parseInt(req.params.id);

        const project = req.body as IProjectUpdate;

        const updatedProject = await projectService.update(id, project);

        return res.status(201).json(updatedProject);
        
    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);

    }
}


const _delete = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        
        const id = parseInt(req.params.id);

        const deletedSkill = await projectService.delete(id);

        return res.status(201).json(deletedSkill);

    } catch (err) {
        
        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);

    }
}


const createBulk = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const projects = req.body as IProjectCreate[];

        const resultsCount = await projectService.createMany(projects);

        return res.status(201).json(resultsCount);

    } catch (err) {
  
        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
        
    }
}


const deleteBulk = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const resultsCount = await projectService.deleteAll();

        return res.status(201).json(resultsCount);

    } catch (err) {
        
        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }
}





module.exports = {
    findAll,
    findById,
    create,
    update,
    _delete,
    createBulk,
    deleteBulk
}