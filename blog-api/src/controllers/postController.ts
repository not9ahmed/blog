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
    body: Post;
}

interface PostBulkResponse extends Response {
    body: Post[];
}


const findAll = async (req: PostBulkRequest, res: PostBulkResponse, next: NextFunction) => {

    try {

        // fetch params from where
        // convery query {...cols: value} into prisma where {}
        const query = req.query;
        console.log("query", query)

        const userCategoryId = parseInt(req.params.categoryId);
    
        const posts: Post[] = await postService.findAll({});

        // TODO: use dtos here

        return res.status(200).json(posts);

     // based on error thrown which is from PRISMA I can find what caused it
    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }

}

const findById = async (req: PostRequest, res: PostResponse, next: NextFunction) => {


    try {
        
        const id = parseInt(req.params.id);

        const post = await postService.findById(id);

        return res.status(200).json(post);

    } catch (err) {
        
        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }
}


const create = async (req: PostRequest, res: PostResponse, next: NextFunction) => {
    
    try {
        
        const post = req.body as Post;
        
        const createdPost = await postService.create(post);

        return res.status(200).json(createdPost);


    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    
    }
}



const update = async (req: PostRequest, res: PostResponse, next: NextFunction) => {
    
    try {

        const post = req.body as Post;
        const id = parseInt(req.params.id);

        const updatedPost = await postService.update(id, post);

        return res.status(200).json(updatedPost);

    } catch (err) {
        const response = {
            message: `error occured`,
            error: err
        }


        return res.status(404).json(response);
    }
}


const _delete = async (req: PostRequest, res: PostResponse, next: NextFunction) => {
    
    try {

        const id = parseInt(req.params.id);

        const deletedPost = await postService.delete(id);

        return res.status(200).json(deletedPost);


    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }
}

const createBulk = async (req: PostBulkRequest, res: PostBulkResponse, next: NextFunction) => {
    
    try {

        const posts = req.body as Post[];

        const resultCount = await postService.createMany(posts);

        return res.status(200).json(resultCount);

    } catch (err) {

        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }
}


const deleteBulk = async (req: PostBulkRequest, res: PostBulkResponse, next: NextFunction) => {
    
    try {
        

        const resultCount = await postService.deleteAll();

        return res.status(200).json(resultCount);

    } catch (err) {
        
        const response = {
            message: `error occured`,
            error: err
        }

        return res.status(404).json(response);
    }
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    _delete,
    createBulk,
    deleteBulk
}



/**
 * Responds with list of posts
 */
// router.get('/', (req: Request, res: Response) => {


//     console.log("Hello from posts")

//     // handle search
//     // const query = req.query.q as string;


//     let postsDb: PostDtoInterface[];

//     // make copy of post to modify
//     let postsCopy: PostInterface[] = JSON.parse(JSON.stringify(posts));


//     // parameters checking
//     if(req.query.q){

//         let q = req.query.q as string

//         q = q.toLowerCase();

//         console.log("q", q);

//         postsCopy = postsCopy
//             .filter(post =>
//                         post.title.toLowerCase().match(q)
//                     );

//         console.log("postsCopy", postsCopy)
//     }


//     if(req.query.category){

//         let category = req.query.category as string;

//         let categoryId = parseInt(category)

//         console.log("categoryId", categoryId);
    
//         postsCopy = postsCopy
//             .filter(post =>
//                         post.category === categoryId
//                     );

//         console.log("postsCopy", postsCopy)
//     }



//     // mapping posts to dto
//     postsDb = postsCopy.map(post =>
//         {
//             const newPost: PostDtoInterface = {
//                 id: post.id,
//                 title: post.title,
//                 description: post.description,
//                 images: post.images,
//                 category: post.category,
//                 createdDate: post.createdDate,
//                 createdBy: post.createdBy,
//             }
//             return newPost;
//         }
//     );

//     console.log(postsDb);

//     res.status(200).send(postsDb);

// })
