import { Category, Prisma  } from '@prisma/client'
import prisma from '../utils/dbClient';


// THESE CAN BE Moved to outer file
interface BatchPayload extends Prisma.BatchPayload{}


interface ICategoryService {
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    findByParentCategoryId(id: number): Promise<Category[]>;
    create(category: Category): Promise<Category>;
    createMany(categories: Category[]): Promise<BatchPayload>;
    update(id: number, category: Category): Promise<Category>;
    delete(id: number): Promise<Category>;
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
            );

            return category;

        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    create = async (category: Category): Promise<Category> => {
        
        try {

            const categoryCreated  = await prisma.category.create({
                data: category
            });

            return categoryCreated;

        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    update = async (id: number, category: Category): Promise<Category> => {
        
        try {

            const updateCategory = await prisma.category.update({
                where: {
                    id: id
                },
                data: category
            })

            return updateCategory;
            
        } catch (err) {
            console.log(err);
            throw err;
        }
    }


    delete = async (id: number): Promise<Category> => {
        
        try {
            const categoryDeleted = await prisma.category.delete({
                where: {
                    id: id
                }
            });
            return categoryDeleted;

        } catch(err) {
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