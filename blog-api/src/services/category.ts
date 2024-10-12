import { Category, Prisma  } from '@prisma/client'
import prisma from '../utils/dbClient';
import { ICategory, ICategoryCreate, ICategoryUpdate } from '../types/category';


// THESE CAN BE Moved to outer file
interface BatchPayload extends Prisma.BatchPayload{}


// Can be extracted to factory service
interface ICategoryService {

    //TODO: allow passing parameters
    findAll(): Promise<ICategory[]>;
    findById(id: number): Promise<ICategory>;
    create(category: ICategoryCreate): Promise<ICategory>;
    createMany(categories: ICategoryCreate[]): Promise<BatchPayload>;
    update(id: number, category: ICategoryUpdate): Promise<ICategory>;
    delete(id: number): Promise<ICategory>;
    deleteAll(): Promise<BatchPayload>;
    findByParentCategoryId(id: number): Promise<ICategory[]>;
}


export default class CategoryService implements ICategoryService {

    constructor(){
        console.log("CategoryService Construct");    
    }

    findAll = async(): Promise<ICategory[]> => {
        
        try {

            const categories = await prisma.category.findMany({
                orderBy: {
                    id: "asc"
                }
            });
            return categories;

        } catch (err) {
            console.log(err);
            throw err;
        }
    }


    findById = async (id: number): Promise<ICategory> => {
        
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
            console.log(err);
            throw err;
        }
    }

    create = async (category: ICategoryCreate): Promise<ICategory> => {
        
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


    createMany = async (categories: ICategoryCreate[]): Promise<BatchPayload> => {
        
        try {

            const resultCount = await prisma.category.createMany({
                data: categories
            });

            return resultCount;
            
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    update = async (id: number, category: ICategory): Promise<Category> => {
        
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


    delete = async (id: number): Promise<ICategory> => {
        
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

    deleteAll = async(): Promise<BatchPayload> => {

        try {

            const resultCount = await prisma.category.deleteMany();

            return resultCount;
            
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    findByParentCategoryId = async (id: number): Promise<ICategory[]> => {

        try {
            
            const categories = await prisma.category.findMany({
                where: {
                    parentCategoryId: id
                }
            })

            return categories;

        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}