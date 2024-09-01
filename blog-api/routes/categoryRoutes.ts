import Router from 'express'
const categoriesController = require('../controllers/categoryController')

// Declare router app with "/categories prefix"
const router = Router()


// route to get all categories
router.get('/', categoriesController.findAllCategories);

// route to get category by id
router.get('/:id', categoriesController.findCategoryById);

// // route to create category
// router.post('/', categoriesController.createCategory);

// // route to update
// router.put('/:id', categoriesController.updateCategory)

// // route to delete
// router.delete('/:id', categoriesController.deleteCategory)


// Bulk Operations
router.post('/bulk', categoriesController.createBulk);
router.delete('/bulk', categoriesController.deleteBulk);



module.exports = router