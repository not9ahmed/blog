// prisma boilerplate
import { Category, Image, Post, PrismaClient } from '@prisma/client'

// Importing Services
import SkillService from '../services/skill';
import SkillTypeService  from '../services/skillType';
import CategoryService from '../services/category';
import ProjectService from '../services/project';
import PostService from '../services/post';
import ImageService from '../services/image';

// Dummy Data
const categories = require('./data/categories') as Category[];
const projects = require('./data/projects.json');
const skillTypes = require('./data/skillTypes.json');
const skills = require('./data/skills.json');
const posts = require('./data/posts.json') as Post[];


const prisma = new PrismaClient({
  // log: ['info'],
});

// this file will load up data from json to postgresql db
async function main() {
  // ... you will write your Prisma Client queries here

  console.log("hello from seed");

  // create user
    // const user = await prisma.user.create({
    //   data: {
    //     id: 1,
    //     email: "dummy@gmail.com",
    //     name: "ahmed",
    //     role: "admin"
    //   }
    // });


    // const user = await prisma.user.findFirst();

    // console.log(user)



    const skillService = new SkillService();
    const skillTypeService = new SkillTypeService();
    const categoryService = new CategoryService();
    const projectService = new ProjectService();
    const postService = new PostService();
    const imageService = new ImageService();


    const projectsDb = await projectService.findAll();

    console.log(projectsDb)





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