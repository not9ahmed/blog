import PostService from "../services/post";
import { Request, Response, NextFunction} from 'express'
import { IPost, IPostCreate, IPostUpdate } from "../types/post";
import { errorHandler } from "../errors/controllerError";

const postService = new PostService();


const findAll = async (req: Request, res: Response, next: NextFunction) => {

    try {

        // fetch params from where
        // convery query {...cols: value} into prisma where {}
        const query = req.query;
        console.log("query", query)

        const userCategoryId = parseInt(req.params.categoryId);
    
        const posts: IPost[] = await postService.findAll({...query});

        // TODO: use dtos here

        return res.status(200).json(posts);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }

}

const findById = async (req: Request, res: Response, next: NextFunction) => {


    try {
        
        const id = parseInt(req.params.id);

        const post: IPost = await postService.findById(id);

        return res.status(200).json(post);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }
}


const create = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        
        const post = req.body as IPostCreate;
        
        const createdPost = await postService.create(post);

        return res.status(200).json(createdPost);


    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    
    }
}



const update = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        // check if it matches update
        const post = req.body as IPostUpdate;

        const id = parseInt(req.params.id);

        const updatedPost = await postService.update(id, post);

        return res.status(200).json(updatedPost);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }
}


const _delete = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const id = parseInt(req.params.id);

        const deletedPost = await postService.delete(id);

        return res.status(200).json(deletedPost);


    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }
}

const createBulk = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const posts = req.body as IPostCreate[];

        const resultCount = await postService.createMany(posts);

        return res.status(200).json(resultCount);

    } catch (err) {

        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }
}


const deleteBulk = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        

        const resultCount = await postService.deleteAll();

        return res.status(200).json(resultCount);

    } catch (err) {
        
        console.log(err);
        const response = errorHandler(err);
        return res.status(404).json(response);
    }
}


const uploadImages = async (req: Request, res: Response) => {


    //     // return in express end the route execution
    //     // very useful for checking and validation
    //     if(!req.files){
    //         return res.status(404).send({
    //             message: `No files were sent`
    //         })
    //     }
    
    
    //     // update posts
    //     const id: number = parseInt(req.params.id)
    
    
    //     // find post
    //     const post = posts.find(el => el.id === id);
    
    //     // if not found then end request
    //     if(!post){
    //         res.status(404).send({
    //             msg: `post ${id} not found`
    //         })
    //     }
    
    
    
    //     // req.files is array of `photos` files
    //     // req.body will contain the text fields, if there were any
    
    
    //     // get files from request
    //     const files = req.files as Express.Multer.File[]
    
    
    //     // print file names in console
    //     files.forEach((file, idx) => console.log(`file[${idx}]`, file))
    
    
    //     // get file name
    //     const fileNames: string[]  = files.map(el => el.filename);
    
    
    //     console.log("fileNames", fileNames)
    
    //     // add the file name to array
    //     // later on it will be image url
    //     if(post){
    
    //         post.images = fileNames
    //     }
    
    
    //     console.log("req.body", req.body);
    //     // console.log("req.files", req.file );
    
    
    
    
    //     res.status(200).send({
    //         msg: `file upload route for post ${id} the ${files.length} are uploaded`,
    //         post: post
    
    //     })
    
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    _delete,
    createBulk,
    deleteBulk,
    uploadImages
}