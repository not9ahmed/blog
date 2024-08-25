import { Skill } from "@prisma/client";
import prisma from '../utils/dbClient';


interface ISkillTypeService {
    findAll(): null
    findById(): null;
    create(): void;
};

export class SkillTypeService implements ISkillTypeService {

    findAll = () => {
        return null;
    }

    findById(): null {
        throw new Error("Method not implemented.");
    }

    create() {
        throw new Error("Method not implemented.");
    }


}