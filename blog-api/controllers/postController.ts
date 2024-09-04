import PostService from "../services/post";
import { Request, Response, NextFunction} from 'express'

import { Post } from "@prisma/client";



const postService = new PostService();


interface PostRequest extends Request {
    body: Post;
}

interface PostBulkRequest extends Request {
    body: Post[];
}


interface PostResponse extends Response {
    body: {
        message: string;
        data: Post;
    }
}

interface PostBulkResponse extends Response {
    body: {
        message: string;
        data: Post[];
    }
}


const findAllPosts = async (req: PostBulkRequest, res: PostBulkResponse, next: NextFunction) => {

    try {

        // fetch params from where

        const query = req.query;

        console.log("query", query)

        const userCategoryId = parseInt(req.params.categoryId);
    
        const posts: Post[] = await postService.findAll({
            id:  userCategoryId
            
        });
        
        const response = {
            message: "hello from all posts",
            data: posts
        };

        return res.status(200).json(response);

     // based on error thrown which is from PRISMA I can find what caused it
    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        next();

        return res.status(404).json(response);
    }

}

module.exports = {
    findAllPosts
}