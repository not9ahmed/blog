import { NextFunction, Request, Response } from 'express'
import SkillTypeService from '../services/skillTypeService';
import {  Prisma, SkillType } from "@prisma/client";
import { ErrorHandler } from '../errors/controllerErrorHandlers';

const errorHandler = new ErrorHandler();


const skillTypeService = new SkillTypeService();


// interfaces
// Every Request may have diffrrent body

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

     // based on error thrown which is from PRISMA I can find what caused it
    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response)
    }
}


const findSkillTypeById = async (req: SkillTypeRequest, res: SkillTypeResponse) => {
    
    console.log(`findSkillTypeById called`);
    try {

        const id = parseInt(req.params.id); 
        const skillType = await skillTypeService.findById(id);

        const response = {
            message: "hello from find all skills",
            data: skillType
        };

        return res.status(200).json(response);

    } catch (err) {

        console.log(err);

        const response = {
            message: "error occured",
            error: err
        }

        return res.status(404).json(response)
    }
}


const createSkillType = async (req: SkillTypeRequest, res: SkillTypeResponse, next: NextFunction) => {

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


        console.log(err);

        const response = {
            message: `error occured`,
            error: err
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


const deleteSkillType = async (req: SkillTypeRequest, res: SkillTypeResponse) => {

    try {
        
        const id = parseInt(req.params.id); 
        const skillTypeDeleted = await skillTypeService.delete(id);

        const response = {
            message: "hello from update skill type",
            data: skillTypeDeleted
        }

        return res.status(201).json(response);

    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }
        return res.status(404).json(response)
    }

}





const createBulkSkillTypes = async (req: Request, res: SkillTypeResponse, next: NextFunction) => {

    try {


        // will be array of skill types
        // needs complete SkillTypeRequest
        const skillTypes = req.body;

        console.log("createBulkSkillTypes");
        console.log(req.body);


        const skillTypesCount = await skillTypeService.createMany(skillTypes);


        const response = {
            message: "hello from find all skills",
            data: skillTypesCount
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


const deleteBulkSkillTypes = async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const resultCount = await skillTypeService.deleteAll();

        console.log(resultCount);

        return res.status(201).json(resultCount);


    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }
        return res.status(404).json(response)
    }
}



module.exports = {
    findAllSkillTypes,
    findSkillTypeById,
    createSkillType,
    updateSkillType,
    deleteSkillType,
    createBulkSkillTypes,
    deleteBulkSkillTypes
}