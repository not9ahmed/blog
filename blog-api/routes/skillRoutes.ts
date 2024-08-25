import Router from 'express'
import { Request, Response} from 'express'
const skillController = require('../controllers/skillController');

const router = Router();

router.get('/', skillController.findAllSkills);
router.get('/', skillController.findSkillById);
// router.post('/', skillController.createSkill);
// router.post('/', skillController.createBulkSkill);
// router.post('/', skillController.deleteSkill);
// router.post('/', skillController.deleteManySkill);



module.exports = router