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

    console.log('id', req.params.id);

    console.log("Hello from posts")

    res.send(posts[0]);

})


module.exports = router