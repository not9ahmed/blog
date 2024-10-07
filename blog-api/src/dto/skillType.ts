// db interface
import { SkillType } from "@prisma/client";

// Base Interface
export interface ISkillType extends SkillType { }

/**
 * Interface for skillType creation
 */
export interface ISkillTypeCreate extends Omit<SkillType, 'id' > { }

/**
 * Interface for skillType edit
 */
export interface ISkillTypeUpdate extends Omit<SkillType, 'id'> { }

/**
 * Interface for skillType deletion
 */
export interface ISkillTypeDelete extends Pick<SkillType, 'id'> { }