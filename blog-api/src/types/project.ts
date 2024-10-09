// db interface
import { Project } from "@prisma/client";

/**
 * Base Skill Type
 */
export interface IProject extends Project { }

/**
 * Interface for skillType creation
 */
export interface IProjectCreate extends Omit<IProject, 'id' > { }

/**
 * Interface for skillType edit
 */
export interface IProjectUpdate extends Omit<IProject, 'id'> { }

/**
 * Interface for skillType deletion
 */
export interface IProjectDelete extends Pick<IProject, 'id'> { }