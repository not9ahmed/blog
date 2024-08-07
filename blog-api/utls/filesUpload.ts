import 'multer'
import { Request, Response, NextFunction } from 'express'
const multer = require('multer');

// Types for File upload
type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void



const fileFilter = () => {
    
}




// The original code issue was cause of the callback function
// which made typescript throw type error
const storage = multer.diskStorage({

    destination: (
        request: Request, // Request type 
        file: Express.Multer.File, // file type
        callback: DestinationCallback //call back function
    ): void => {
        callback(null, 'uploads/')
    },

    filename: (
        req: Request, 
        file: Express.Multer.File, 
        callback: FileNameCallback
    ): void => {

        console.log("file.originalname", file.originalname)
        const uniqueSuffix = file.originalname
        callback(null, uniqueSuffix)


        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname
        // callback(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })


export default upload