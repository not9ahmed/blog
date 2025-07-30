// Folder to handle middleware
import express, { Request, Response, NextFunction} from 'express';


// auth will be later here
export const test = (req: Request, res: Response, next: NextFunction) => {

    console.log("Middlware Called")
    // console.log(req);


    next();
};