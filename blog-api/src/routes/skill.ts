import Router from 'express'
const skillController = require('../controllers/skillController');

const router = Router();

router.get('/', skillController.findAll);
router.get('/:id([0-9]+)', skillController.findById);
router.post('/', skillController.create);
router.put('/:id([0-9]+)', skillController.update);

// Bulk Operations
router.post('/bulk', skillController.createBulk);
router.delete('/bulk', skillController.deleteBulk);

router.delete('/:id([0-9]+)', skillController._delete);


module.exports = router