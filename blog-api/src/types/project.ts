// db interface
import { Project } from "@prisma/client";

/**
 * Base project Type
 */
// export interface IProject extends Project { }

export type IProject & Project
 

/**
 * Interface for project creation
 */
export interface IProjectCreate extends Omit<IProject, 'id' > { }

/**
 * Interface for project edit
 */
export interface IProjectUpdate extends Omit<IProject, 'id'> { }

/**
 * Interface for project deletion
 */
export interface IProjectDelete extends Pick<IProject, 'id'> { }