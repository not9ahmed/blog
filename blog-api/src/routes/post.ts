import Router from 'express'
import { Request, Response, NextFunction } from 'express'
import { PostDtoInterface, PostInterface } from '../types/postTypes';
import upload from '../utils/filesUpload';
import { isAuthenticated } from '../middleware/auth';

const router = Router();
const posts: PostInterface[] = require('../db_scripts/data/posts.json');

const postController = require('../controllers/postController');


router.get('/', postController.findAll);
router.get('/:id', postController.findById);
router.post('/', postController.create);

// trying auth middleware
router.post('/bulk', postController.createBulk);

router.put('/:id', postController.update);

router.delete('/bulk', postController.deleteBulk);
router.delete('/:id', postController._delete);





/**
 * Will accept Form Data and images and update post object
 * Returns a message if the images upload is succeful
 */
router.post('/:id/images', upload.array('images', 12), (req: Request, res: Response) => {


    // return in express end the route execution
    // very useful for checking and validation
    if(!req.files){
        return res.status(404).send({
            message: `No files were sent`
        })
    }


    // update posts
    const id: number = parseInt(req.params.id)


    // find post
    const post = posts.find(el => el.id === id);

    // if not found then end request
    if(!post){
        res.status(404).send({
            msg: `post ${id} not found`
        })
    }



    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any


    // get files from request
    const files = req.files as Express.Multer.File[]


    // print file names in console
    files.forEach((file, idx) => console.log(`file[${idx}]`, file))


    // get file name
    const fileNames: string[]  = files.map(el => el.filename);


    console.log("fileNames", fileNames)

    // add the file name to array
    // later on it will be image url
    if(post){

        post.images = fileNames
    }


    console.log("req.body", req.body);
    // console.log("req.files", req.file );




    res.status(200).send({
        msg: `file upload route for post ${id} the ${files.length} are uploaded`,
        post: post

    })

});





module.exports = router