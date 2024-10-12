// db interface
import { Post } from "@prisma/client";

/**
 * Base Post Type
 */
export interface IPost extends Post { }

/**
 * Interface for post creation
 */
export interface IPostCreate extends Omit<IPost, 'id' > { }

/**
 * Interface for post edit
 */
export interface IPostUpdate extends Omit<IPost, 'id'> { }

/**
 * Interface for post deletion
 */
export interface IPostDelete extends Pick<IPost, 'id'> { }