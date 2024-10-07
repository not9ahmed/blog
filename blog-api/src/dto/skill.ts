// db interface
import { Skill } from "@prisma/client";

// Base Interface
export interface ISkillType extends Skill { }

/**
 * Interface for skillType creation
 */
export interface ISkillTypeCreate extends Omit<Skill, 'id' > { }

/**
 * Interface for skillType edit
 */
export interface ISkillTypeUpdate extends Omit<Skill, 'id'> { }

/**
 * Interface for skillType deletion
 */
export interface ISkillTypeDelete extends Pick<Skill, 'id'> { }