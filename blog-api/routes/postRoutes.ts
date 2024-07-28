import Router from 'express'
const router = Router();
const posts = require('../models/posts.json');


/**
 * Responds with list of posts
 */
router.get('/', (req, res) => {


    console.log("Hello from posts")

    res.send(posts);

})

/**
 * Fetch single posts
 */
router.get('/:id', (req, res) => {

    const id = parseInt(req.params.id);

    console.log('id', req.params.id);

    console.log("Hello from posts id endpoint")

    res.send(posts[id - 1]);

})


// endpoint to create a new post
router.post('/', (req, res) => {

    console.log(req.body)

    res.send(req.body)
})


module.exports = router