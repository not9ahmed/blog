import Router from 'express'
const categories = require('../models/categories.json')
const categoriesController = require('../controllers/categoryController')

const router = Router()


// route to get all categories
router.get('/', categoriesController.findAllCategories);

// route to get category by id
router.get('/:id', categoriesController.findCategoryById);

// route to create category
router.post('/', categoriesController.createCategory);

// route to update
router.put('/:id', categoriesController.updateCategory)

// route to delete
router.delete('/:id', categoriesController.deleteCategory)



module.exports = router