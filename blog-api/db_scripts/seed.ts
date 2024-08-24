// prisma boilerplate
import { PrismaClient } from '@prisma/client'
const categories = require('./categories.json');
const projects = require('./projects.json');

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here


  const categoriesSaved = await prisma.category.createMany({
    data: categories
  })

  console.log(categoriesSaved)



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