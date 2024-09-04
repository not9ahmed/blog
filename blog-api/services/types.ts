// Services type will be here

import { Post, Prisma } from "@prisma/client";

interface BatchPayload extends Prisma.BatchPayload{}

interface Service <T>{
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    // create(item: T): Promise<T>;
    // createMany(items: T[]): Promise<BatchPayload>;
    // update(id: number, item: T): Promise<T>;
    // delete(id: number): Promise<T>;
    // deleteAll(): Promise<BatchPayload>;
}


export default class PostService implements Service<Post> {
    constructor(){
        console.log("PostService Construct");
    }
    findAll(): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<{ id: number; title: string; description: string; keywords: string[]; content: string; images: string[]; categoryId: number; createdDate: Date; createdBy: number; }> {
        throw new Error("Method not implemented.");
    }



}