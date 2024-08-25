import { Skill } from "@prisma/client";
import { Prisma } from "@prisma/client";
import prisma from '../utils/dbClient';


// interface BatchPayload { count: 3 }

interface ISkillService {
    findAll(): Promise<Skill[]>;
    findById(id: number): Promise<Skill | null>;
    create(skill: Skill): Promise<Skill | null>;
    createMany(skills: Skill[]): Promise<Prisma.BatchPayload>;
}

export class SkillService implements ISkillService {



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


    createMany = async (skills: Skill[]): Promise<Prisma.BatchPayload> => {


        try {

            const resultsCount = await prisma.skill.createMany({
                data: skills
            });

            return resultsCount;

        } catch (err){
            throw new Error(`Error Occurred ${err}`);
        }
    }


}