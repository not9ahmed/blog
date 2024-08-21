import { Skill, ToolType } from "./skill"


const sampleToolType: SkillType = {
    id: 1,
    name: 'Programming Language'
};

const sampleTool: Skill = {
    id: 1,
    name: 'FastAPI',
    icon: 'sample.png',
    link: 'google.com',
    type: sampleToolType

};

console.log(sampleTool);

// also works
// const sampleTool: Tool = {
//     id: 1,
//     name: 'FastAPI',
//     image: 'sample.png',
//     type: {
//         id: 1,
//         name: 'Programming Language'
//     }

// };

