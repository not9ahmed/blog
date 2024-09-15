import Router from 'express'
import { Request, Response, NextFunction} from 'express'
import { ErrorCode, MulterError } from 'multer';


export const fileLimitHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    
    console.log("fileLimitHandler called");
    console.log("err", err);
    if (err.code === 'LIMIT_FILE_SIZE') {

        const response = {
            result: 'fail',
            error: {
                code: 1001,
                message: 'File is too big'
            }
        }

        return res.status(400).json(response)
    }
}



// module.exports = {
//     fileLimitHandler
// }