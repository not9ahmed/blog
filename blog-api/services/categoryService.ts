import { Category, Prisma  } from '@prisma/client'
import prisma from '../utils/dbClient';


// THESE CAN BE Moved to outer file
interface BatchPayload extends Prisma.BatchPayload{}


interface ICategoryService {
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    findByParentCategoryId(id: number): Promise<Category[]>;
    // create(category: Category): Promise<Category>;
    createMany(categories: Category[]): Promise<BatchPayload>;
    // update(id: number, category: Category): Promise<Category>;
    // delete(id: number): Promise<Category>;
    deleteAll(): Promise<BatchPayload>;
}


export default class CategoryService implements ICategoryService {


    constructor(){
        console.log("CategoryService called");
    }


    findAll = async(): Promise<Category[]> => {
        
        try {

            const categories = await prisma.category.findMany();
            return categories;

        } catch (err) {
            console.log(err)
            throw err;
        }
    }


    findById = async (id: number): Promise<Category> => {
        
        try {

            // in case not found directly throw
            const category = await prisma.category.findFirstOrThrow({
                    where: {
                        id: id
                    }
                }
            )

            return category;

        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    findByParentCategoryId = async (id: number): Promise<Category[]> => {

        try {
            
            const categories = await prisma.category.findMany({
                where: {
                    parentCategoryId: id
                }
            })

            return categories;

        } catch (err) {
            console.log(err)
            throw err;
        }
    }


    createMany = async (categories: Category[]): Promise<BatchPayload> => {
        
        try {

            const resultCount = await prisma.category.createMany({
                data: categories
            });

            return resultCount;
            
        } catch (err) {
            console.log(err)
            throw err;
        }

    }
    deleteAll = async(): Promise<BatchPayload> => {

        try {

            const resultCount = await prisma.category.deleteMany();

            return resultCount;
            
        } catch (err) {
            console.log(err)
            throw err;
        }
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