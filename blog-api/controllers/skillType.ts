import { Request, Response } from 'express'
import SkillTypeService from '../services/skillTypeService';
import {  SkillType } from "@prisma/client";

const skillTypeService = new SkillTypeService();


// interfaces
interface SkillTypeRequest extends Request {
    body: SkillType;
}

interface SkillTypeResponse extends Response {
    body: SkillType;
}


const findAllSkillTypes = async (req: SkillTypeRequest, res: SkillTypeResponse) => {

    try {
    
        const skillTypes: SkillType[] = await skillTypeService.findAll();

        console.log(skillTypes);

        res.type('application/json');


        const response = {
            message: "hello from find all skills",
            data: skillTypes
        }

        return res.status(200).json(response);

    } catch (err) {

        const response = {
            message: `error occured ${err}`,
            error: err
        }

        return res.status(404).json(response)
    }
}


const findSkillTypeById = async (req: SkillTypeRequest, res: SkillTypeResponse) => {
    
    try {

        const id = parseInt(req.params.id); 
        const skillType = await skillTypeService.findById(id);

        const response = {
            message: "hello from find all skills",
            data: skillType
        };

        return res.status(200).json(response);

    } catch (err) {

        const response = {
            message: `error occured ${err}`,
            error: err
        }

        return res.status(404).json(response)
    }
}


const createSkillType = async (req: SkillTypeRequest, res: SkillTypeResponse) => {

    try {



        // id not found ??
        // invalid data ??
        // for headers can be done fromm middleware ??


        const skillType = req.body;


        const skillTypeCreated = await skillTypeService.create(skillType);

        const response = {
            message: "hello from find all skills",
            data: skillTypeCreated
        }

        return res.status(201).json(response);

    } catch (err) {


        console.log("skill type controller");
        console.error(err);
        const response = {
            message: `error occured`,
            error: "User id does not exists"
        }

        return res.status(404).json(response)
    }
}


const updateSkillType = async (req: SkillTypeRequest, res: SkillTypeResponse) => {

    try {
        
        const id = parseInt(req.params.id); 
        
        const skillType = req.body;

        const skillTypeUpdated = await skillTypeService.update(id, skillType);

        const response = {
            message: "hello from update skill type",
            data: skillTypeUpdated
        }

        return res.status(201).json(response);

    } catch (err) {


        console.log("skill type controller");
        console.error(err);
        const response = {
            message: `error occured`,
            error: "User id does not exists"
        }

        return res.status(404).json(response)
    }

}

module.exports = {
    findAllSkillTypes,
    findSkillTypeById,
    createSkillType,
    updateSkillType
}