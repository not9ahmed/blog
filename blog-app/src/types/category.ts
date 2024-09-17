/**
 * Base category interface
 */ 
export interface ICategory {
    id: number,
    name: string,
    parentCategoryId: number,
    createdDate: Date,
    createdBy: number,
}

/**
 * Interface for category creation
 */
export interface ICategoryCreate extends Omit<ICategory, 'id' | 'createdDate' > { }

/**
 * Interface for category edit
 */
export interface ICategoryUpdate extends Omit<ICategory, 'id' | 'createdDate'> { }

/**
 * Interface for category deletion
 */
export interface ICategoryDelete extends Pick<ICategory, 'id'> { }