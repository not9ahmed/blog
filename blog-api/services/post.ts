import { Post, Prisma } from "@prisma/client";
import prisma from "../utils/dbClient";



// THESE CAN BE Moved to outer file
interface BatchPayload extends Prisma.BatchPayload{}


interface IPostService {
    findAll(): Promise<Post[]>;
    // findById(id: number): Promise<Post>;
    // create(post: Post): Promise<Post>;
    createMany(posts: Post[]): Promise<BatchPayload>;
    // update(id: number, post: Post): Promise<Post>;
    // delete(id: number): Promise<Post>;
    deleteAll(): Promise<BatchPayload>;
}


export default class PostService implements IPostService {
    constructor(){
        console.log("PostService Construct");
    }

    findAll = async (): Promise<Post[]> => {
        
        try {
            
            const posts =await prisma.post.findMany({});

            return posts;

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