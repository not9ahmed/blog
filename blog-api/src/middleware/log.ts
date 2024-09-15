// logger
import { Request, Response, NextFunction } from "express"
import { appendFile } from "fs";

export const userlog = async (req: Request, res: Response, next: NextFunction) => {
    
    const userIp = req.ip ?? ""
    console.log("Time", Date.now());

    const url = req.originalUrl
    const time = Date.now().toString()

    const log = "url: " + url + " --- time: " + time + '\n';

    appendFile('./logsSample/logs.txt', log, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      }); 


    next();
}


