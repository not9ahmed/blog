// Services type will be here

import { Post, Prisma } from "@prisma/client";

interface BatchPayload extends Prisma.BatchPayload{}


// Defining Generic Class Interface for basic crud
interface Service <T>{
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    create(item: T): Promise<T>;
    createMany(items: T[]): Promise<BatchPayload>;
    update(id: number, item: T): Promise<T>;
    delete(id: number): Promise<T>;
    deleteAll(): Promise<BatchPayload>;
    count(): number;

}

// Great Solution
// Defining class that implement service class
export default class PostService<Post> implements Service<Post> {
    constructor(){
        console.log("PostService Construct");
    }
    findAll(): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    create(item: Post): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    createMany(items: Post[]): Promise<BatchPayload> {
        throw new Error("Method not implemented.");
    }
    update(id: number, item: Post): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<Post> {
        throw new Error("Method not implemented.");
    }
    deleteAll(): Promise<BatchPayload> {
        throw new Error("Method not implemented.");
    }
    count(): number {
        throw new Error("Method not implemented.");
    }

    
}