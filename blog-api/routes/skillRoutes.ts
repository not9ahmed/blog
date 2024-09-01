import Router from 'express'
const skillController = require('../controllers/skillController');

const router = Router();

router.get('/', skillController.findAll);
router.get('/:id', skillController.findById);
router.post('/', skillController.create);
router.put('/:id', skillController.update);
router.delete('/:id', skillController._delete);


// Bulk Operations
router.post('/bulk', skillController.createBulk);
router.delete('/bulk', skillController.deleteBulk);



module.exports = router