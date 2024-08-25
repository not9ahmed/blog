// prisma boilerplate
import { PrismaClient } from '@prisma/client'
import SkillService from '../services/skillService';
const categories = require('./categories.json');
const projects = require('./projects.json');
const skills = require('./skills.json');

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here


//   const categoriesSaved = await prisma.category.createMany({
//     data: categories
//   })



    const skillService = new SkillService();

    // const skillsCreated = skillService.createMany(
    //     skills
    // );

    // await should be added to method
    const skillsCreated = await skillService.findById(1);

    console.log(skillsCreated);


    // const deleteSkill = await skillService.delete(10);

    // console.log(deleteSkill);


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