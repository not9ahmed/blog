// prisma boilerplate
import { PrismaClient } from '@prisma/client'
import SkillService from '../services/skill';
import SkillTypeService  from '../services/skillType';
import CategoryService from '../services/category';
import ProjectService from '../services/project';

// Dummy Data
const categories = require('./data/categories');
const projects = require('./data/projects.json');
const skillTypes = require('./data/skillTypes.json');
const skills = require('./data/skills.json');

const prisma = new PrismaClient({
  log: ['info'],
});

// this file will load up data from json to postgresql db
async function main() {
  // ... you will write your Prisma Client queries here

    const skillService = new SkillService();
    const skillTypeService = new SkillTypeService();
    const categoryService = new CategoryService();
    const projectService = new ProjectService();

    // const projectsDb = await projectService.createMany(projects);
    // const projectsDb = await projectService.createMany(projects);
    // const projectsDb = await projectService.createMany(projects);
    // const projectsDb = await projectService.createMany(projects);
    
    const projectsDb = await projectService.findById(1);
    console.log(projectsDb);


    // await categoryService.findByParentCategoryId(1);


}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })