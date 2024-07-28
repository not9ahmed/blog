import Router from 'express'
const categoriesController = require('../controllers/categoryController')

const router = Router()


// route to create post
router.post('/', (req, res) => {

    res.json({
        message: "create category"
    });
})


router.get('/', (req, res) => {

    res.json({
        message: "Hello from categories controllers"
    });
})

router.get('/:id', (req, res) => {

    const id = req.params.id;

    
    
    res.json({
        message: `Get category by id ${id}`
    });
})




// route to update
router.put('/:id', (req, res) => {

    const id = req.params.id;


    res.json({
        message: `update category by id ${id}`
    });
})

// route to delete
router.delete('/:id', (req, res) => {

    const id = req.params.id;


    res.json({
        message: `delete category by id ${id}`
    });
})



module.exports = router