import { Skill } from "@prisma/client";

export interface CreateSkill extends Skill {

}

// in case of certail fields need to be optional
export interface EditSkill extends Partial<Skill> {

}