import Router from 'express'
const projectController = require('../controllers/projectController');

const router = Router();

router.get('/', projectController.findAll);
router.get('/:id([0-9]+)', projectController.findById);
router.post('/', projectController.create);
router.put('/:id([0-9]+)', projectController.update);


// Bulk Operations
router.post('/bulk', projectController.createBulk);
router.delete('/bulk', projectController.deleteBulk);


router.delete('/:id([0-9]+)', projectController._delete);




module.exports = router