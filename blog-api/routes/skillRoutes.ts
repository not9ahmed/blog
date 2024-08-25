import Router from 'express'
import { Request, Response} from 'express'
const skillController = require('../controllers/skillController');

const router = Router();

router.get('/', skillController.findAllSkills);



module.exports = router