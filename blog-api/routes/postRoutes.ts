import Router from 'express'
import { Request, Response, NextFunction } from 'express'
import { PostDtoInterface, PostInterface } from '../types/postTypes';
import upload from '../utls/filesUpload';

const router = Router();
const posts: PostInterface[] = require('../models/posts.json');


/**
 * Responds with list of posts
 */
router.get('/', (req: Request, res: Response) => {


    console.log("Hello from posts")

    // handle search
    // const query = req.query.q as string;


    let postsDb: PostDtoInterface[];

    // make copy of post to modify
    let postsCopy: PostInterface[] = JSON.parse(JSON.stringify(posts));


    // parameters checking
    if(req.query.q){

        let q = req.query.q as string

        q = q.toLowerCase();

        console.log("q", q);

        postsCopy = postsCopy
            .filter(post =>
                        post.title.toLowerCase().match(q)
                    );

        console.log("postsCopy", postsCopy)
    }


    if(req.query.category){

        let category = req.query.category as string;

        let categoryId = parseInt(category)

        console.log("categoryId", categoryId);
    
        postsCopy = postsCopy
            .filter(post =>
                        post.category === categoryId
                    );

        console.log("postsCopy", postsCopy)
    }



    // mapping posts to dto
    postsDb = postsCopy.map(post =>
        {
            const newPost: PostDtoInterface = {
                id: post.id,
                title: post.title,
                description: post.description,
                images: post.images,
                category: post.category,
                createdDate: post.createdDate,
                createdBy: post.createdBy,
            }
            return newPost;
        }
    );

    console.log(postsDb);

    res.status(200).send(postsDb);

})

/**
 * Fetch single posts
 */
router.get('/:id', (req: Request, res: Response) => {

    console.log("Hello from posts id endpoint");

    const id = parseInt(req.params.id);

    console.log('id', req.params.id);


    const post = posts[id - 1];

    console.log("post", post);

    res.status(200).send(post);

})


// endpoint to create a new post
router.post('/', (req: Request, res: Response) => {


    const data = req.body;

    res.status(200).send({
        data: data
    })
});



router.post('/:id/images', upload.array('photos', 12), (req: Request, res: Response) => {



    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any


    const reqFiles = req.files as Express.Multer.File[]


    // console.log("reqFiles", reqFiles ? reqFiles['photos'] : "empty");


    // console.log("reqFiles", reqFiles);


    reqFiles.forEach((file, idx) => console.log(`file[${idx}]`, file))




    console.log("req.body", req.body);
    // console.log("req.files", req.file );



    res.status(200).send({
        msg: `file upload route`
    })

});




// endpoint to update post
router.put('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    console.log('id', req.params.id);


    console.log('data', req.body);

    res.send({
        message: 'update route called',
        post: {
            title: req.body
        }
    })
})


// endpoint to delete post
router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    console.log('id', req.params.id);


    res.send({
        message: 'delete route called'
    })
})




module.exports = router