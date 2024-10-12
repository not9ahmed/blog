import { Skill, Prisma } from "@prisma/client";
import prisma from '../utils/dbClient';
import { ISkill, ISkillCreate, ISkillUpdate } from "../types/skill";

interface BatchPayload extends Prisma.BatchPayload{}

interface ISkillService {
    findAll(): Promise<ISkill[]>;
    findById(id: number): Promise<ISkill>;
    findBySkillType(skillTypeId: number): Promise<ISkill[]>;
    create(skill: ISkillCreate): Promise<Skill>;
    createMany(skills: ISkillCreate[]): Promise<BatchPayload>;
    update(id: number, skill: ISkillUpdate): Promise<Skill>;
    delete(id: number): Promise<ISkill>;
    deleteAll(): Promise<BatchPayload>;
}

export default class SkillService implements ISkillService {

    constructor() {
        console.log("SkillService Construct");
    }
    

    findAll = async (): Promise<ISkill[]> => {

        try {

            const skills = await prisma.skill.findMany(
                {
                    orderBy: {
                        id: "asc"
                    }
                }
            );
            return skills;

        } catch (err){
            console.log(err)
            throw err;
        }
    }

    findById = async (id: number): Promise<ISkill> => {

        try {

            const skill = await prisma.skill.findFirstOrThrow({
                where: {
                    id: id
                }
            });

            return skill;

        } catch (err){
            console.log(err);
            throw err;
        }
    }

    findBySkillType = async (skillTypeId: number): Promise<ISkill[]> => {
        
        console.log("skillTypeId", skillTypeId)
        try {
            const skills = await prisma.skill.findMany({
                where: {
                    skillTypeId: skillTypeId
                }
            })

            return skills;

        } catch (err) {
            console.log(err)

            throw err;
        }
        
    }


    create = async (skill: ISkillCreate): Promise<ISkill> => {
        
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


    createMany = async (skills: ISkillCreate[]): Promise<BatchPayload> => {

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

    update = async(id: number, skill: ISkillUpdate): Promise<Skill> => {
        
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

    delete = async (id: number): Promise<ISkill> => {
        
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