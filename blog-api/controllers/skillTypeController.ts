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

interface SkillTypeBulkRequest extends Request {
    body: SkillType[];
}



interface SkillTypeResponse extends Response {
    body: {
        message: string;
        data: SkillType;
    }
}

interface SkillTypeBulkResponse extends Response {
    body: {
        message: string;
        data: SkillType[];
    }
}


const findAll= async (req: SkillTypeRequest, res: SkillTypeBulkResponse) => {

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

        return res.status(404).json(response);
    }
}


const findById = async (req: SkillTypeRequest, res: SkillTypeResponse) => {
    
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

        return res.status(404).json(response);
    }
}


const create = async (req: SkillTypeRequest, res: SkillTypeResponse, next: NextFunction) => {

    try {

        // id not found ??
        // invalid data ??
        // for headers can be done fromm middleware ??


        const skillType  = req.body;


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

        return res.status(404).json(response);
    }
}


const update = async (req: SkillTypeRequest, res: SkillTypeResponse) => {

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

        return res.status(404).json(response);
    }

}


const _delete = async (req: SkillTypeRequest, res: SkillTypeResponse) => {

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
        return res.status(404).json(response);
    }

}






const createBulk = async (req: SkillTypeBulkRequest, res: SkillTypeResponse, next: NextFunction) => {

    try {


        // will be array of skill types
        // needs complete SkillTypeRequest
        const skillTypes = req.body;

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


const deleteBulk = async (req: Request, res: Response, next: NextFunction) => {

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
    findAll,
    findById,
    create,
    update,
    _delete,
    createBulk,
    deleteBulk
}