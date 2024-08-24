export interface Skill {
    id: number,
    name: string,
    icon: string,
    type: ToolType,
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
export interface ToolType {
    id: number,
    name: string
}