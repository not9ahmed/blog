import Router from 'express'
const controller = require('../controllers/skillTypeController');

const router = Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller._delete);


// Bulk Endpoints
router.post('/bulk', controller.createBulk);
router.delete('/bulk', controller.deleteBulk);



module.exports = router