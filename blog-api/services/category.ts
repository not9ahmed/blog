// prisma boilerplate
import { Category, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

console.log("category service called");



export const findAlCategories = async () => {

    try {
        const categories = await prisma.category.findMany();

        return categories;

    } catch(err){
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    }
}



export const findCategoryById= async (id: number) => {

    try {

        const category = await prisma.category.findFirst({
            where: {
                id: id
            }
        });

        return category;

    } catch(err){
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    }

}



export const createCategory = async (category: Category) => {


    try {
        const categoryDb = await prisma.category.create({
            data: {...category}
        });

        console.log(categoryDb);

        await prisma.$disconnect();
        return categoryDb;
    } catch(err){
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    }

    
}







// SAMPLE CODE BELOW //

// async function main() {
  // ... you will write your Prisma Client queries here

//   const category = await prisma.category.create({
//     data: {
    
//         id: 1,
//         name: "Software Engineering",
//         parentCategory: 1,
//         createdDate: "2024-07-26T20:26:36.479Z",
//         createdBy: 1
//     }
//   })

//     const categories = await prisma.category.findMany();

//   console.log(categories)

// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })