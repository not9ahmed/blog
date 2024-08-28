import Router from 'express'
const controller = require('../controllers/skillTypeController');

const router = Router();

router.get('/', controller.findAllSkillTypes);
router.get('/:id', controller.findSkillTypeById);
router.post('/', controller.createSkillType);
router.put('/:id', controller.updateSkillType);

router.delete('/:id', controller.deleteSkillType);


// Bulk Endpoints
router.post('/bulk', controller.createBulkSkillTypes);
router.delete('/bulk', controller.deleteBulkSkillTypes);



module.exports = router