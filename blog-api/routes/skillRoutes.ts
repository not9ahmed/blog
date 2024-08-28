import Router from 'express'
const skillController = require('../controllers/skillController');

const router = Router();

router.get('/', skillController.findAllSkills);
router.get('/', skillController.findSkillById);
router.post('/', skillController.createSkill);
// router.post('/', skillController.deleteSkill);


// Bulk Operations
router.post('/bulk', skillController.createBulkSkills);
router.delete('/bulk', skillController.deleteBulkSkills);



module.exports = router