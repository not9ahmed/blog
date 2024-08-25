import {  Skill } from "@prisma/client";
import { Prisma } from "@prisma/client";
import prisma from '../utils/dbClient';
import { PrismaClient } from "@prisma/client";


// type BatchPayload = Prisma.BatchPayload;

interface BatchPayload extends Prisma.BatchPayload{}

interface ISkillService {
    findAll(): Promise<Skill[]>;
    findById(id: number): Promise<Skill | null>;
    create(skill: Skill): Promise<Skill | null>;
    createMany(skills: Skill[]): Promise<BatchPayload>;
    update(id: number, skill: Skill): Promise<Skill|null>;
    delete(id: number): Promise<Skill>;
    deleteAll(): Promise<BatchPayload>;
}

export default class SkillService implements ISkillService {

    constructor() {
        console.log("SkillService created");
    }

    // prismaClient = null;

    // constructor(prismaClient: PrismaClient) {
    //     console.log("SkillService created");

    //     // add db client here

    //     prismaClient = new PrismaClient();

    // }
    

    findAll = async (): Promise<Skill[]> => {

        try {

            const skills = await prisma.skill.findMany();
            return skills;

        } catch (err){
            throw new Error(`Error Occurred ${err}`);
        }
    }

    findById = async (id: number): Promise<Skill | null> => {

        try {

            const skill = await prisma.skill.findFirst({
                where: {
                    id: id
                }
            });

            return skill;

        } catch (err){
            throw new Error(`Error Occurred ${err}`);
        }
    }

    create = async (skill: Skill): Promise<Skill | null> => {
        
        try {

            const skillCreated = await prisma.skill.create({
                data: skill
            });

            return skillCreated;

        } catch (err){
            throw new Error(`Error Occurred ${err}`);
        }
    }


    createMany = async (skills: Skill[]): Promise<BatchPayload> => {

        try {

            const resultsCount = await prisma.skill.createMany({
                data: skills
            });

            return resultsCount;

        } catch (err){
            throw new Error(`Error Occurred ${err}`);
        }
    }

    update = async(id: number, skill: Skill): Promise<Skill | null> => {
        
        try {
            

            const skillUpdated = await prisma.skill.update({
                where: {
                    id: id
                },
                data: skill
            })

            return skillUpdated;

        } catch (err) {
            throw new Error(`Error Occurred ${err}`);
        }
    }

    delete = async (id: number): Promise<Skill> => {
        
        try {
            const skill = await prisma.skill.delete({
                where: {
                    id: id
                }
            });
            return skill;

        } catch(err) {
            throw new Error(`Error Occurred ${err}`);
        }
    }


    deleteAll = async (): Promise<BatchPayload> => {
        
        try {
            const resultsCount = await prisma.skill.deleteMany();
            return resultsCount;

        } catch(err) {
            throw new Error(`Error Occurred ${err}`);
        }
    }


    

}