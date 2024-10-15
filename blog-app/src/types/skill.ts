/**
 * Base Skill
 */
export interface ISkill {
    id: number;
    name: string;
    icon: string | null;
    skillTypeId: number;
    link: string;
}

/**
 * Interface for skill creation
 */
export interface ISkillCreate extends Omit<ISkill, 'id' > { }

/**
 * Interface for skill edit
 */
export interface ISkillUpdate extends Omit<ISkill, 'id'> { }

/**
 * Interface for skill deletion
 */
export interface ISkillDelete extends Pick<ISkill, 'id'> { }

/**
 * Interface for bulk skill creation and deletion
 */
export interface ISkillBulk {
    count: number
}