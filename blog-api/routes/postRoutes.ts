import Router from 'express'
import { Request, Response } from 'express'
const router = Router();
const posts = require('../models/posts.json');


/**
 * Responds with list of posts
 */
router.get('/', (req: Request, res: Response) => {


    console.log("Hello from posts")

    res.status(200).send(posts);

})

/**
 * Fetch single posts
 */
router.get('/:id', (req: Request, res: Response) => {

    const id = parseInt(req.params.id);

    console.log('id', req.params.id);

    console.log("Hello from posts id endpoint")

    res.send(posts[id - 1]);

})


// endpoint to create a new post
router.post('/', (req: Request, res: Response) => {


    const data = req.body;

    res.send({
        message: `post create route called`,
        data: data
    })
})


// endpoint to update post
router.put('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    console.log('id', req.params.id);


    res.send({
        message: 'update route called'
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