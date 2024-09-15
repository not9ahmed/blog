import { NextFunction, Request, Response } from 'express'
// import upload from '../utils/filesUpload';

import ImageService from '../services/image';
import { Image } from '@prisma/client';
import { ImageCreate } from '../services/types';
const imageService = new ImageService();

interface ImageRequest extends Request {
    files: Express.Multer.File[];
}

interface ImageResponse extends Response {
    files: Express.Multer.File[];
}



const findAllImages = async (req: ImageRequest, res: ImageResponse) => {

    try {

        
        const images = await imageService.findAll();

        const response = {
            message: "Success",
            data: images
        };

        return res.status(200).json(response);


    } catch (err) {
        const response = {
            errorMessage: err
        };
        
        return res.status(404).json(response);
    }
}



// image will already get stored from the middleware
// logic here for storing in db
const createImages = async (req: ImageRequest, res: ImageResponse) => {



    if(!req.files){
        return res.status(404).send({
            message: "No files were sent"
        })
    }

    // get files from request
    const files = req.files;


    // print file names in console
    files.forEach((file, idx) => console.log(`file[${idx}]`, file))


    // get file name
    const fileNames: string[]  = files.map( (el,idx) => el.filename);

    let images: ImageCreate[] = fileNames.map(el => (
        {
            url: el
        }
    ));
    


    console.log(images);

    try {
        
        const imagesCreated = await imageService.createMany(images)
    
        const response = {
            message: `file upload route files upload the ${files.length} are uploaded`,
            data: imagesCreated
        };

        return res.status(200).json(response);

    } catch (err) {

        const response = {
            message: `file upload route files upload the ${files.length} are uploaded`,
            err: err
        };
        
        return res.status(404).json(response);


    }



}


const deleteImage = async (req: ImageRequest, res: ImageResponse) => {

    try {

        const id = parseInt(req.params.id);



    } catch (err) {
        
    }
}


module.exports = {
    findAllImages,
    createImages,
    deleteImage
}