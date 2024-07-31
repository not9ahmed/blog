import Router from 'express'
import { Request, Response } from 'express'
const categories = require('../models/categories.json')
// const categoriesController = require('../controllers/categoryController')

const router = Router()


// route to get all categories
router.get('/', (req: Request, res: Response) => {

    // res.json({
    //     message: "create category"
    // });


    res.status(200).send(categories);
})



// route to get category by id
router.get('/:id', (req: Request, res: Response) => {

    const id = req.params.id;

    
    
    res.json({
        message: `Get category by id ${id}`
    });
})



// route to create category
router.post('/', (req: Request, res: Response) => {

    res.json({
        message: "Hello from categories controllers"
    });
})






// route to update
router.put('/:id', (req: Request, res: Response) => {

    const id = req.params.id;


    res.json({
        message: `update category by id ${id}`
    });
})

// route to delete
router.delete('/:id', (req: Request, res: Response) => {

    const id = req.params.id;


    res.json({
        message: `delete category by id ${id}`
    });
})



module.exports = router