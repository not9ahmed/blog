// db interface
import { Category } from "@prisma/client";

/**
 * Base category
 */
export interface ICategory extends Category { }

/**
 * Interface for skillType creation
 */
export interface ICategoryCreate extends Omit<ICategory, 'id' > { }

/**
 * Interface for skillType edit
 */
export interface ICategoryUpdate extends Omit<ICategory, 'id'> { }

/**
 * Interface for skillType deletion
 */
export interface ICategoryDelete extends Pick<ICategory, 'id'> { }