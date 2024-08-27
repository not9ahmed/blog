import { Prisma, Skill, SkillType } from "@prisma/client";
import prisma from '../utils/dbClient';

interface BatchPayload extends Prisma.BatchPayload{}

type SkillTypesJoined = {
    skills: Skill[]
} & SkillType;

// can use DTO here
interface ISkillTypeService {
    findAll(): Promise<SkillType[]>;
    findById(id: number): Promise<SkillType | null>;
    create(skillType: SkillType): Promise<SkillType | null>;
    createMany(skillTypes: SkillType[]): Promise<BatchPayload>;


    // try join
    findAllWithSkills(): Promise<SkillTypesJoined[]>;


    update(id: number, skillType: SkillType): Promise<SkillType | null>;
    delete(id: number): Promise<SkillType>;
    deleteAll(): Promise<BatchPayload>;
};

export class SkillTypeService implements ISkillTypeService {

    findAll = async (): Promise<SkillType[]> => {

        try {

            const skillTypes = await prisma.skillType.findMany({
                orderBy: {
                    id: "asc"
                }
            })
            return skillTypes;

        } catch (err) {
            throw new Error(`Error Occurred ${err}`);
        }
    }


    findById = async (id: number): Promise<SkillType | null> => {
        
        try {
            

            const skillType = await prisma.skillType.findFirst({
                where: {
                    id: id
                }
            });

            return skillType;

        } catch (err) {
            throw new Error(`Error Occurred ${err}`);
        }
    }


    create = async (skillType: SkillType): Promise<SkillType | null> => {
        
        try {
            const skillTypeCreated = await prisma.skillType.create({
                data: skillType
            });

            return skillTypeCreated;

        } catch (err) {
            throw new Error(`Error Occurred ${err}`);
        }
    }


    createMany = async (skillTypes: SkillType[]): Promise<BatchPayload> => {
        
        try {
            const skillTypesCount = await prisma.skillType.createMany({
                data: skillTypes
            });

            return skillTypesCount;
        } catch (err) {
            throw new Error(`Error Occurred ${err}`);
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
            

            const skillTypeUpdated = prisma.skillType.update({
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
            throw new Error(`Error Occurred ${err}`);
            
        }
    }


    deleteAll = async (): Promise<BatchPayload> => {

        try {
            
            const resultsCount = prisma.skillType.deleteMany();

            return resultsCount;

        } catch (err) {
            throw new Error(`Error Occurred ${err}`);
        }
    }

}