// Service to handle image upload

import { Image, Prisma } from "@prisma/client";

interface BatchPayload extends Prisma.BatchPayload{}

interface IImageService {
    // findAll(): Promise<Image[]>;
    // findById(id: number): Promise<Image>;
    create(image: Image): Promise<Image>;
    createMany(images: Image[]): Promise<BatchPayload>;
    update(id: number, category: Image): Promise<Image>;
    delete(id: number): Promise<Image>;
    // deleteAll(): Promise<BatchPayload>;
}

export default class ImageService implements IImageService {
    constructor(){
        console.log("PostService Construct");
    }

    create = async (image: Image): Promise<Image> => {
        throw new Error("Method not implemented.");
    }
    createMany = async (images: Image[]): Promise<BatchPayload> => {
        throw new Error("Method not implemented.");
    }
    update =  async (id: number, category: Image): Promise<Image> => {
        throw new Error("Method not implemented.");
    }
    delete = async (id: number): Promise<Image> => {
        throw new Error("Method not implemented.");
    }

    
}