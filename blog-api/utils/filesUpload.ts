// File Upload configs file
import 'multer'
import { Request, Response, NextFunction } from 'express'
import { FileFilterCallback } from 'multer'
const multer = require('multer');

// Types for File upload
type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void



// doing file check in file filter
// can be used to check file size and type before storage
// also change file name to make it unique
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {

    console.log("file name", file.originalname)


    // file.size
    // can be used to check size


    // only cursor.png allowed to download
    // if(file.originalname !== 'cursor.png'){
    //     console.log("inside if");
        // cb(null, false); 
    // } else {
        // cb(null, true); 
        
    // }


    // if(file.size > 100000)

    // not error and accept
    cb(null, true); 
}




// to handle the storage of the files
// The original code issue was caused of the callback function
// which made typescript throw type error
const storage = multer.diskStorage({

    // send file to upload file
    // can be s3 bucket or upload service
    destination: (
        request: Request, // Request type 
        file: Express.Multer.File, // file type
        callback: DestinationCallback //call back function
    ): void => {
        callback(null, 'uploads/')
    },

    // call back for file name changes
    filename: (
        req: Request, 
        file: Express.Multer.File, 
        callback: FileNameCallback
    ): void => {

        console.log("file.originalname", file.originalname)
        // const uniqueSuffix = file.originalname
        // callback(null, uniqueSuffix)

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname
        callback(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const limits = {fileSize: 50000 }

const upload = multer(
    {
        storage: storage,
        fileFilter: fileFilter,
        limits: limits
    }
)


export default upload