import express from 'express';
import { Request, Response } from 'express'
import SkillService from '../services/skillService';
import {  Skill } from "@prisma/client";

const skillsService = new SkillService();


interface SkillRequest extends Request {
    body: Skill;
  }


const findAllSkills= async (req: SkillRequest, res: Response) => {

    try {
    
        const skills = await skillsService.findAll();

        console.log(skills);

        return res.status(200).send({
            message: "hello from find all skills",
            skills: skills
        });

    } catch (err) {
        // throw new Error(`Error Occurred ${err}`);
        return res.status(404).json({
            message: "error occured"
        })

    }
}

module.exports = {
    findAllSkills,
}