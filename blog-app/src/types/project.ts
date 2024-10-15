/**
 * Base project Type
 */
export interface IProject {
    id: number;
    name: string;
    startDate: Date;
    completeDate: Date | null;
    status: string;
    description: string;
    tools: string[];
    images: string[];
    link: string;
    github: string;
}

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