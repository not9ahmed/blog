import express from 'express';
import { Request, Response } from 'express'
import SkillService from '../services/skillService';
import {  Skill } from "@prisma/client";

const skillsService = new SkillService();


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

            skills = await skillsService.findAll();

        } else {
            skills = await skillsService.findBySkillType(skillTypeId);

            // skills = await skillsService.findAll();
        }
        

        // console.log(skills);

        return res.status(200).send({
            message: "hello from find all skills",
            skills: skills
        });

    } catch (err) {
        // throw new Error(`Error Occurred ${err}`);
        return res.status(404).json({
            message: "error occured",
            error: err
        })

    }
}


const findById = async (req: SkillRequest, res: Response) => {

    try {
    
        const id = parseInt(req.params.id);

        const skill = await skillsService.findById(id);

        console.log(skill);

        return res.status(200).send({
            message: "hello from find all skills",
            skill: skill
        });

    } catch (err) {
        // throw new Error(`Error Occurred ${err}`);
        return res.status(404).json({
            message: "error occured"
        })

    }
}

const create = async (req: SkillRequest, res: SkillResponse) => {

    try {

        const skill = req.body;

        const createdSkill = await skillsService.create(skill);

        const response = {
            message: `Hello from create skill`,
            skill: createdSkill
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


const update = async (req: SkillRequest, res: SkillResponse) => {

    try {

        const id = parseInt(req.params.id);

        const skill = req.body;

        const updatedSkill = await skillsService.update(id, skill);

        const response = {
            message: `Hello from update skill`,
            skill: updatedSkill
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




const _delete = async (req: SkillRequest, res: SkillResponse) => {

    try {
        
        const id = parseInt(req.params.id);

        await skillsService.delete(id);
    } catch (err) {
        
        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
    }
}


const createBulk = async (req: SkillBulkRequest, res: SkillResponse) => {

    try {

        const skills = req.body;

        const resultsCount = await skillsService.createMany(skills);

        const response = {
            message: `Hello from create skill`,
            count: resultsCount
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



const deleteBulk = async (req: SkillRequest, res: SkillResponse) => {

    try {


        const resultsCount = await skillsService.deleteAll();


        const response = {
            message: `Hello from create skill`,
            count: resultsCount
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


module.exports = {
    findAll,
    findById,
    create,
    update,
    _delete,
    createBulk,
    deleteBulk
}