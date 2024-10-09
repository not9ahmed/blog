// Service to handle image upload
import { Image, Prisma } from "@prisma/client";
import prisma from "../utils/dbClient";
import { ImageCreate } from "./baseService";


interface BatchPayload extends Prisma.BatchPayload{}

interface IImageService {
    findAll(): Promise<Image[]>;
    findById(id: number): Promise<Image>;
    create(image: Image): Promise<Image>;
    createMany(images: ImageCreate[]): Promise<Image[]>;
    update(id: number, category: Image): Promise<Image>;
    delete(id: number): Promise<Image>;
    // deleteAll(): Promise<BatchPayload>;
}

export default class ImageService implements IImageService {
    constructor(){
        console.log("ImageService Construct");
    }

    findAll = async (): Promise<Image[]> => {
        
        try {
            const images = await prisma.image.findMany();

            return images;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    findById = async (id: number): Promise<Image> => {
        try {
            
            const image = await prisma.image.findFirstOrThrow({
                where: {
                    id: id
                }
            })

            return image;

        } catch (err) {
            console.log(err);
            throw err;
        }
    }


    create = async (image: ImageCreate): Promise<Image> => {
        
        try {
            const imageCreated = await prisma.image.create({
                data: image
            });

            return imageCreated;
        } catch (err) {
            console.log(err);
            throw err
        }
    }

    createMany = async (images: ImageCreate[]): Promise<Image[]> => {
        
        try {
            const imagesCreated = await prisma.image.createManyAndReturn({
                data: images
            });

            return imagesCreated;

        } catch (err) {
            console.log(err);
            throw err
        }
    }


    update =  async (id: number, category: Image): Promise<Image> => {
        throw new Error("Method not implemented.");
    }
    delete = async (id: number): Promise<Image> => {
        throw new Error("Method not implemented.");
    }

    
}