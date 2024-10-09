import { NextFunction, Request, Response } from 'express'
import SkillTypeService from '../services/skillType';
import {  Prisma, SkillType } from "@prisma/client";
import { errorHandler } from '../errors/controllerError';
import { ISkillType, ISkillTypeCreate, ISkillTypeUpdate } from '../types/skillType';

// const errorHandler = new ErrorHandler();


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
    body: SkillType;
}

interface SkillTypeBulkResponse extends Response {
    body: SkillType[];
}


const findAll= async (req: SkillTypeRequest, res: SkillTypeBulkResponse) => {

    try {
    
        const skillTypes: ISkillType[] = await skillTypeService.findAll();

        console.log(skillTypes);

        return res.status(200).json(skillTypes);

     // based on error thrown which is from PRISMA I can find what caused it
    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }
}


const findById = async (req: Request, res: Response) => {
    
    console.log(`findSkillTypeById called`);
    try {

        const id = parseInt(req.params.id); 
        const skillType = await skillTypeService.findById(id);

        return res.status(200).json(skillType);

    } catch (err) {


        console.log(err);

        const response = errorHandler(err);

        return res.status(404).json(response);

    }
}


const create = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const skillType  = req.body as ISkillTypeCreate;

        const skillTypeCreated = await skillTypeService.create(skillType);


        return res.status(201).json(skillTypeCreated);

    } catch (err) {


        console.log(err);

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }
}


const update = async (req: Request, res: Response) => {

    try {
        
        // get id from url
        const id = parseInt(req.params.id); 
        
        const skillType = req.body as ISkillTypeUpdate;

        const skillTypeUpdated = await skillTypeService.update(id, skillType);

        return res.status(201).json(skillTypeUpdated);

    } catch (err) {

        console.log(err);

        const response = {
            message: `error occured`,
            error: "User id does not exists"
        }

        return res.status(404).json(response);
    }

}


const _delete = async (req: Request, res: Response) => {

    try {
        
        const id = parseInt(req.params.id); 
        const skillTypeDeleted = await skillTypeService.delete(id);

        return res.status(201).json(skillTypeDeleted);

    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }
        return res.status(404).json(response);
    }

}


const createBulk = async (req: Request, res: Response, next: NextFunction) => {

    try {


        // will be array of skill types
        // needs complete SkillTypeRequest
        const skillTypes = req.body as ISkillTypeCreate[];

        const skillTypesCount = await skillTypeService.createMany(skillTypes);

        return res.status(201).json(skillTypesCount);

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