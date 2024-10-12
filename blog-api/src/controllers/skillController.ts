import { Request, Response } from 'express'
import SkillService from '../services/skill';
import { errorHandler } from '../errors/controllerError';
import { ISkill, ISkillCreate, ISkillUpdate } from '../types/skill';

const skillService = new SkillService();

const findAll = async (req: Request, res: Response) => {

    try {
    
        let skills: ISkill[];


        // better to extract
        const q = req.query;
        console.log('q', q);
        
        const skillTypeId = parseInt(req.query.skillTypeId as string);


        console.log("skillTypeId", skillTypeId);


        // Condition for queries
        // query not provided
        if (!skillTypeId) {

            skills = await skillService.findAll();

        } else {
            skills = await skillService.findBySkillType(skillTypeId);

            // skills = await skillsService.findAll();
        }


        return res.status(200).send(skills);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);

    }
}


const findById = async (req: Request, res: Response) => {

    try {
    
        const id = parseInt(req.params.id);
        const skill = await skillService.findById(id);

        console.log(skill);

        return res.status(200).send(skill);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);

    }
}

const create = async (req: Request, res: Response) => {

    try {

        const skill = req.body as ISkillCreate;

        const createdSkill = await skillService.create(skill);

        return res.status(201).json(createdSkill);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
        
    }

}


const update = async (req: Request, res: Response) => {

    try {

        const id = parseInt(req.params.id);

        const skill = req.body as ISkillUpdate;

        const updatedSkill = await skillService.update(id, skill);

        return res.status(201).json(updatedSkill);
        
    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }

}




const _delete = async (req: Request, res: Response) => {

    try {
        
        const id = parseInt(req.params.id);

        const deletedSkill = await skillService.delete(id);

        return res.status(201).json(deletedSkill);

    } catch (err) {
        
        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }
}


const createBulk = async (req: Request, res: Response) => {

    try {

        const skills = req.body as ISkillCreate[];

        const resultsCount = await skillService.createMany(skills);

        return res.status(201).json(resultsCount);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
        
    }
} 



const deleteBulk = async (req: Request, res: Response) => {

    try {


        const resultsCount = await skillService.deleteAll();

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