export interface Skill {
    id: number,
    name: string,
    icon: string,
    type: SkillType,
    link: string
}

// or type
// 'Programming Language'
// 'Toolkit'
// framework


// can be
// programming langauge
// tools
// framework
export interface SkillType {
    id: number,
    name: string
}