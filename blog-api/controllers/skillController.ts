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


const findAllSkills = async (req: SkillRequest, res: Response) => {

    try {
    
        const skills = await skillsService.findAll();

        console.log(skills);

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


const findSkillById = async (req: SkillRequest, res: Response) => {

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

const createSkill = async (req: SkillRequest, res: SkillResponse) => {

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


const updateSkillById = async (req: SkillRequest, res: SkillResponse) => {


}




const deleteSkill = async (req: SkillRequest, res: SkillResponse) => {

}


const createBulkSkills = async (req: SkillBulkRequest, res: SkillResponse) => {

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

        return res.status(404).json(response)
        
    }
} 


module.exports = {
    findAllSkills,
    findSkillById,
    createSkill,
    updateSkillById,
    deleteSkill,
    createBulkSkills
}