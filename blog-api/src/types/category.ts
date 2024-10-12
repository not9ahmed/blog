// db interface
import { Category } from "@prisma/client";

/**
 * Base category
 */
export interface ICategory extends Category { }

/**
 * Interface for category creation
 */
export interface ICategoryCreate extends Omit<ICategory, 'id' > { }

/**
 * Interface for category edit
 */
export interface ICategoryUpdate extends Omit<ICategory, 'id'> { }

/**
 * Interface for category deletion
 */
export interface ICategoryDelete extends Pick<ICategory, 'id'> { }