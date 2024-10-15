import { ICategory } from "./category";

// must add post category
export interface PostInterface  {
    id: number,
    title: string,
    description: string,
    content: string,
    images: string[] | string,
    category?: number | ICategory | undefined,
    createdDate: Date,
    createdBy: string,

};


// create another interface when it's joined with post
// the images when upload are raw images therfore of file type
export interface PostCreateInterface {
    title: string,
    description: string,
    content: string,
    images:  File[] | [] ,

    // can add userid here then join data
    createdBy: string,
};






export interface PostEditInterface  {
    title: string,
    description: string,
    content: string,
    images:  File[] | File | null | string[] ,
};


export interface PostImagesInterface  {
    images:  File[]
};