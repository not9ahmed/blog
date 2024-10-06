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
export interface ISkillTypeUpdate extends Omit<ISkillType, 'id'> { }

/**
 * Interface for skillType deletion
 */
export interface ISkillTypeDelete extends Pick<ISkillType, 'id'> { }