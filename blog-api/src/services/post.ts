import { Post, Prisma, User } from "@prisma/client";
import prisma from "../utils/dbClient";
import { IPost, IPostCreate, IPostUpdate } from "../types/post";



// THESE CAN BE Moved to outer file
interface BatchPayload extends Prisma.BatchPayload{}

type UserWhere  = Prisma.PostWhereInput


interface IPostService {
    // findAll(userWhere?: UserWhere, q?: string): Promise<IPost[]>;
    findAll(query?: string): Promise<IPost[]>;
    findById(id: number): Promise<IPost>;
    create(post: IPostCreate): Promise<IPost>;
    createMany(posts: IPostCreate[]): Promise<BatchPayload>;
    update(id: number, post: IPostUpdate): Promise<IPost>;
    delete(id: number): Promise<IPost>;
    deleteAll(): Promise<BatchPayload>;
}


export default class PostService implements IPostService {
    constructor(){
        console.log("PostService Construct");
    }
    
    findAll = async (query: any): Promise<Post[]> => {
        
        try {

            const q: string = query['q'];
            console.log('q', q);

            // TODO: handle other search ways
            const whereClause: Partial<User | {q: string}> = query;
            console.log("whereCondition", whereClause);


            if(query['q']) {
                const posts = await prisma.post.findMany({
                    where: {
                        title: {
                            contains: q,
                            mode: 'insensitive'
                        }
                    }
                });
                return posts;
            }



            if(query['categoryId']) {
                const posts = await prisma.post.findMany({
                    where: {
                        categoryId: parseInt(query['categoryId'])
                    }
                });
                return posts;
            }


            // validate that keys are correct first

            // if (query) {

            //     const posts = await prisma.post.findMany({
            //         where: {
            //             categoryId: parseInt(query['categoryId'])
            //         }
            //     });
            //     return posts;
            // }

        
            const posts = await prisma.post.findMany(); 
            return posts;              
            
            
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    
    findById = async(id: number): Promise<IPost> => {
        
        try {
            const post = await prisma.post.findFirstOrThrow({
                where: {
                    id: id
                }
            });
            
            return post;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    
    
    create = async(post: IPostCreate): Promise<IPost> => {
        
        try {
            
            const postCreated = await prisma.post.create({
                data: post
            });
            
            return postCreated;
            
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    
    
    createMany = async (posts: IPostCreate[]): Promise<BatchPayload> => {
        
        try {
            const resultCount = await prisma.post.createMany({
                data: posts
            })
            
            return resultCount;
        } catch (err) {
            
            console.log(err);
            throw err;
        }   
    }
    update =  async(id: number, post: IPostUpdate): Promise<IPost> => {
        
        try {
            const updatedPost = await prisma.post.update({
                where: {
                    id: id
                },
                data: post
            });
            
            return updatedPost;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    
    delete = async(id: number): Promise<IPost> => {

        try {
            const deletedPost = await prisma.post.delete({
                where: {
                    id: id
                }
            });
            
            return deletedPost;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    deleteAll = async(): Promise<BatchPayload> => {
        
        try {
            
            const resultCount = await prisma.post.deleteMany();
            return resultCount;

        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}