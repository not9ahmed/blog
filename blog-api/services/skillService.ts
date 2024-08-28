import {  Skill } from "@prisma/client";
import { Prisma } from "@prisma/client";
import prisma from '../utils/dbClient';
import { PrismaClient } from "@prisma/client";


// type BatchPayload = Prisma.BatchPayload;

interface BatchPayload extends Prisma.BatchPayload{}

interface ISkillService {
    findAll(): Promise<Skill[]>;
    findById(id: number): Promise<Skill>;
    create(skill: Skill): Promise<Skill>;
    createMany(skills: Skill[]): Promise<BatchPayload>;
    update(id: number, skill: Skill): Promise<Skill>;
    delete(id: number): Promise<Skill>;
    deleteAll(): Promise<BatchPayload>;
}

export default class SkillService implements ISkillService {

    constructor() {
        console.log("SkillService created");
    }
    

    findAll = async (): Promise<Skill[]> => {

        try {

            const skills = await prisma.skill.findMany();
            return skills;

        } catch (err){
            console.log(err)

            throw err;
        }
    }

    findById = async (id: number): Promise<Skill> => {

        try {

            const skill = await prisma.skill.findFirstOrThrow({
                where: {
                    id: id
                }
            });

            return skill;

        } catch (err){
            console.log(err)

            throw err;
        }
    }

    create = async (skill: Skill): Promise<Skill> => {
        
        try {

            const skillCreated = await prisma.skill.create({
                data: skill
            });

            return skillCreated;

        } catch (err){
            console.log(err)

            throw err;
        }
    }


    createMany = async (skills: Skill[]): Promise<BatchPayload> => {

        try {

            const resultsCount = await prisma.skill.createMany({
                data: skills
            });

            return resultsCount;

        } catch (err){
            console.log(err)

            throw err;
        }
    }

    update = async(id: number, skill: Skill): Promise<Skill> => {
        
        try {
            

            const skillUpdated = await prisma.skill.update({
                where: {
                    id: id
                },
                data: skill
            })

            return skillUpdated;

        } catch (err) {
            console.log(err)

            throw err;
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
            console.log(err)

            throw err;
        }
    }


    deleteAll = async (): Promise<BatchPayload> => {
        
        try {
            const resultsCount = await prisma.skill.deleteMany();
            return resultsCount;

        } catch(err) {
            console.log(err)

            throw err;
        }
    }


    

}