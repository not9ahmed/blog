// db interface
import { Skill } from "@prisma/client";

/**
 * Base Skill
 */
export interface ISkill extends Skill { }

/**
 * Interface for skill creation
 */
export interface ISkillCreate extends Omit<ISkill, 'id' > { }

/**
 * Interface for skill edit
 */
export interface ISkillUpdate extends Omit<ISkill, 'id'> { }

/**
 * Interface for skill deletion
 */
export interface ISkillDelete extends Pick<ISkill, 'id'> { }