// prisma boilerplate
import { PrismaClient } from '@prisma/client'
import SkillService from '../services/skillService';
import { SkillTypeService } from '../services/skillTypeService';
const categories = require('./data/categories');
const projects = require('./data/projects.json');
const skillTypes = require('./data/skillTypes.json');
const skills = require('./data/skills.json');

const prisma = new PrismaClient()

// this file will load up data from json to postgresql db
async function main() {
  // ... you will write your Prisma Client queries here

    const skillService = new SkillService();
    const skillTypeService = new SkillTypeService();

    // const resultCount = await skillTypeService.createMany(skillTypes);
    // console.log(resultCount);

    const skillTypes = await skillTypeService.findAll();
    console.log(skillTypes);



    // const skillType = await skillTypeService.findById(1);
    // console.log(skillType);

    // const skillTypeCreated = await skillTypeService.create({
    //   id: 4,
    //   name: "Hobbies"
    // });

    // console.log(skillTypeCreated);


    // const skillTypesJoined = await skillTypeService.findAllWithSkills();

    // console.log(JSON.stringify(skillTypesJoined, null, 4));


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