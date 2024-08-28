import { Prisma, Skill, SkillType } from "@prisma/client";
import prisma from '../utils/dbClient';

interface BatchPayload extends Prisma.BatchPayload{}

type SkillTypesJoined = {
    skills: Skill[];
} & SkillType;

// can use DTO here
interface ISkillTypeService {
    findAll(): Promise<SkillType[]>;
    findById(id: number): Promise<SkillType>;

    // should check if id already exists
    create(skillType: SkillType): Promise<SkillType>;
    createMany(skillTypes: SkillType[]): Promise<BatchPayload>;

    // try join
    findAllWithSkills(): Promise<SkillTypesJoined[]>;

    update(id: number, skillType: SkillType): Promise<SkillType | null>;
    delete(id: number): Promise<SkillType>;
    deleteAll(): Promise<BatchPayload>;
};



// Error Handling should be considered
// The below functions throw Prisma Errors
// I need to abstract them away


export default class SkillTypeService implements ISkillTypeService {


    constructor(){
        console.log("SkillTypeService Called");
    }
    
    findAll = async (): Promise<SkillType[]> => {

        try {

            const skillTypes = await prisma.skillType.findMany({
                orderBy: {
                    id: "asc"
                }
            })
            return skillTypes;

        } catch (err) {
            console.log(err)

            throw err;
        }
    }


    findById = async (id: number): Promise<SkillType> => {
        
        try {
            

            const skillType = await prisma.skillType.findFirstOrThrow({
                where: {
                    id: id
                }
            });

            return skillType;

        } catch (err) {
            console.log(err)
            if(err instanceof Prisma.PrismaClientKnownRequestError){

                console.log("Skill Type not Found");
            }
            throw err;
        }
    }


    create = async (skillType: SkillType): Promise<SkillType> => {
        
        try {
            const skillTypeCreated = await prisma.skillType.create({
                data: skillType
            });

            return skillTypeCreated;

        } catch (err) {

            console.log(err);

            if(err instanceof Prisma.PrismaClientKnownRequestError){

                console.log("Skill Type not Found");
            }
            throw err;
        
        }
    }


    createMany = async (skillTypes: SkillType[]): Promise<BatchPayload> => {
        
        try {
            const skillTypesCount = await prisma.skillType.createMany({
                data: skillTypes
            });

            return skillTypesCount;
        } catch (err) {


            console.log(err);

            if(err instanceof Prisma.PrismaClientKnownRequestError){

                console.log("Skill Type not Found");
            }
            throw err;
        }
    }


    findAllWithSkills = async(): Promise<SkillTypesJoined[]> => {
        
        try {
            const skillTypes = await prisma.skillType.findMany({
                include: {
                    skills: true
                }
            });

            return skillTypes;

        } catch (err) {
            throw new Error(`Error Occurred ${err}`);

        }   
    }


    update = async (id: number, skillType: SkillType): Promise<SkillType | null>  => {
    
        try {
            

            const skillTypeUpdated = await prisma.skillType.update({
                where: {
                    id: id
                },
                data: skillType
            })

            return skillTypeUpdated;

        } catch (err) {
            throw new Error(`Error Occurred ${err}`);
        }
    }
    
    delete = async (id: number): Promise<SkillType> => {

        try {

            const skillType = await prisma.skillType.delete({
                where: {
                    id: id
                }
            });

            return skillType;

        } catch (err) {

            throw err;
            
        }
    }


    deleteAll = async (): Promise<BatchPayload> => {

        try {
            
            const resultsCount = await prisma.skillType.deleteMany();

            console.log(resultsCount);

            return resultsCount;

        } catch (err) {
            throw err;
        }
    }

}