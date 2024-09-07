// Folder to handle middleware
import express, { Request, Response, NextFunction} from 'express';

// auth will be later here
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    console.log("auth middleware");

    const authHeader = req.headers["authorization"]

    const bearerToken = authHeader?.substring(7);

    console.log(authHeader);

    console.log(bearerToken);

    

    next();
};