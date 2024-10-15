/**
 * Base skilltype interface
 */ 
export interface ISkillType {
    id: number,
    name: string
}

/**
 * Interface for skillType creation
 */
export interface ISkillTypeCreate extends Omit<ISkillType, 'id' > { }

/**
 * Interface for skillType edit
 */
export interface ISkillTypeEdit extends Omit<ISkillType, 'id'> { }

/**
 * Interface for skillType deletion
 */
export interface ISkillTypeDelete extends Pick<ISkillType, 'id'> { }

/**
 * Interface for bulk skill type creation and deletion
 */
export interface ISkillTypeBulk {
    count: number
}