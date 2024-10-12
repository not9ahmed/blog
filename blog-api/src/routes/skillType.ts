import Router from 'express'
const controller = require('../controllers/skillTypeController');

const router = Router();

router.get('/', controller.findAll);
router.get('/:id([0-9]+)', controller.findById);
router.post('/', controller.create);
router.put('/:id([0-9]+)', controller.update);

// Bulk Endpoints
router.post('/bulk', controller.createBulk);
router.delete('/bulk', controller.deleteBulk);

router.delete('/:id([0-9]+)', controller._delete);


module.exports = router