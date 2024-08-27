import Router from 'express'
const controller = require('../controllers/skillType');

const router = Router();

router.get('/', controller.findAllSkillTypes);
router.get('/:id', controller.findSkillTypeById);
router.post('/', controller.createSkillType);
router.put('/:id', controller.updateSkillType);

router.delete('/:id', controller.deleteSkillType);

// router.delete('/', controller.deleteManySkill);



module.exports = router