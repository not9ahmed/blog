import Router from 'express'
const categoriesController = require('../controllers/categoryController')
import { userlog } from '../middleware/log'

// Declare router app with "/categories prefix"
const router = Router()


// middleware here
// auth can also be here
// router.use(userlog);

router.get('/', categoriesController.findAllCategories);
router.get('/:id([0-9]+)', categoriesController.findCategoryById);
router.post('/', categoriesController.createCategory);
router.put('/:id([0-9]+)', categoriesController.updateCategory)


// Bulk Operations
router.post('/bulk', categoriesController.createBulk);
router.delete('/bulk', categoriesController.deleteBulk);

router.delete('/:id([0-9]+)', categoriesController.deleteCategory)


// Error handler for router can be here
// router.use();

module.exports = router