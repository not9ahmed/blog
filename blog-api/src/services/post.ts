import { Post, Prisma } from "@prisma/client";
import prisma from "../utils/dbClient";



// THESE CAN BE Moved to outer file
interface BatchPayload extends Prisma.BatchPayload{}

type UserWhere  = Prisma.PostWhereInput


interface IPostService {
    findAll(userWhere: UserWhere | null): Promise<Post[]>;
    findById(id: number): Promise<Post>;
    create(post: Post): Promise<Post>;
    createMany(posts: Post[]): Promise<BatchPayload>;
    update(id: number, post: Post): Promise<Post>;
    delete(id: number): Promise<Post>;
    deleteAll(): Promise<BatchPayload>;
}


export default class PostService implements IPostService {
    constructor(){
        console.log("PostService Construct");
    }
    
    findAll = async (userWhere: UserWhere| null): Promise<Post[]> => {
        
        try {

            if(!userWhere) {
                const posts = await prisma.post.findMany(); 
                return posts;              
            }
            
            const posts = await prisma.post.findMany({
                where: userWhere
            });
            
            return posts;
            
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    
    findById = async(id: number): Promise<Post> => {
        
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
    
    
    create = async(post: Post): Promise<Post> => {
        
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
    
    
    createMany = async (posts: Post[]): Promise<BatchPayload> => {
        
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
    update =  async(id: number, post: Post): Promise<Post> => {
        
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
    
    delete = async(id: number): Promise<Post> => {

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