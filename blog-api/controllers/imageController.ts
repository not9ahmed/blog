import { NextFunction, Request, Response } from 'express'
// import upload from '../utils/filesUpload';

// import ImageService from '../services/image';

// const categoryService = new CategoryService();

interface ImageRequest extends Request {
    files: Express.Multer.File[];
}

interface ImageResponse extends Response {
    files: Express.Multer.File[];
}


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
        const fileNames: string[]  = files.map(el => el.filename);
    
        console.log(fileNames);
    
    
        return res.status(200).send({
            message: `file upload route files upload the ${files.length} are uploaded`
        })

}


const deleteImage = async (req: ImageRequest, res: ImageResponse) => {

    try {

        const id = parseInt(req.params.id);



    } catch (err) {
        
    }
}


module.exports = {
    createImages,
    deleteImage
}