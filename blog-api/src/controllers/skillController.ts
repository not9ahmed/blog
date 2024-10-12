import express from 'express';
import { Request, Response } from 'express'
import SkillService from '../services/skill';
import {  Skill } from "@prisma/client";
import { errorHandler } from '../errors/controllerError';

const skillService = new SkillService();


// interfaces
interface SkillRequest extends Request {
    body: Skill;
}

interface SkillBulkRequest extends Request {
    body: Skill[];
}

interface SkillResponse extends Response {
    body: Skill;
}


const findAll = async (req: SkillRequest, res: Response) => {

    try {
    
        let skills: Skill[];


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


const findById = async (req: SkillRequest, res: Response) => {

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

const create = async (req: SkillRequest, res: SkillResponse) => {

    try {

        const skill = req.body as Skill;

        const createdSkill = await skillService.create(skill);

        return res.status(201).json(createdSkill);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
        
    }

}


const update = async (req: SkillRequest, res: SkillResponse) => {

    try {

        const id = parseInt(req.params.id);

        const skill = req.body as Skill;

        const updatedSkill = await skillService.update(id, skill);

        return res.status(201).json(updatedSkill);
        
    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }

}




const _delete = async (req: SkillRequest, res: SkillResponse) => {

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


const createBulk = async (req: SkillBulkRequest, res: SkillResponse) => {

    try {

        const skills = req.body as Skill[];

        const resultsCount = await skillService.createMany(skills);

        return res.status(201).json(resultsCount);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
        
    }
} 



const deleteBulk = async (req: SkillRequest, res: SkillResponse) => {

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