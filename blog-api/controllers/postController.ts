import PostService from "../services/post";
import { Request, Response, NextFunction} from 'express'

import { Post } from "@prisma/client";
import prisma from "../utils/dbClient";



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


const findAll = async (req: PostBulkRequest, res: PostBulkResponse, next: NextFunction) => {

    try {

        // fetch params from where
        const query = req.query;
        console.log("query", query)

        const userCategoryId = parseInt(req.params.categoryId);
    
        const posts: Post[] = await postService.findAll({});
        
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

const findById = async (req: PostRequest, res: PostResponse, next: NextFunction) => {


    try {
        
        const id = parseInt(req.params.id);

        const post = await postService.findById(id);

        const response = {
            message: "Success",
            data: post
        };

        return res.status(200).json(response);

    } catch (err) {
        
        const response = {
            message: `error occured`,
            error: err
        }

        next();

        return res.status(404).json(response);
    }
}



const update = async (req: PostRequest, res: PostResponse, next: NextFunction) => {
    
    try {

        const post = req.body as Post;
        const id = parseInt(req.params.id);

        const updatedPost = await postService.update(id, post);

        const response = {
            message: "Success",
            data: updatedPost
        };

        return res.status(200).json(response);

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
    findAll,
    findById,
    update
}