import Router from 'express'
const categoriesController = require('../controllers/categoryController')

// Declare router app with "/categories prefix"
const router = Router()

router.get('/', categoriesController.findAllCategories);
router.get('/:id', categoriesController.findCategoryById);
router.post('/', categoriesController.createCategory);
router.put('/:id', categoriesController.updateCategory)


// Bulk Operations
router.post('/bulk', categoriesController.createBulk);
router.delete('/bulk', categoriesController.deleteBulk);

router.delete('/:id', categoriesController.deleteCategory)


module.exports = router