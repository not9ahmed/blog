// db interface
import { Skill } from "@prisma/client";

/**
 * Base Skill Type
 */
export interface ISkill extends Skill { }

/**
 * Interface for skillType creation
 */
export interface ISkillCreate extends Omit<ISkill, 'id' > { }

/**
 * Interface for skillType edit
 */
export interface ISkillUpdate extends Omit<ISkill, 'id'> { }

/**
 * Interface for skillType deletion
 */
export interface ISkillDelete extends Pick<ISkill, 'id'> { }