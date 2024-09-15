import Router from 'express'
const projectController = require('../controllers/projectController');
const projects = require('../db_scripts/data/projects.json');


const router = Router();

router.get('/', projectController.findAllProjects);
router.get('/:id', projectController.findProjectById);
router.post('/', projectController.createProject);
router.put('/:id', projectController.updateProject);


// Bulk Operations
router.post('/bulk', projectController.createBulkProjects);
router.delete('/bulk', projectController.deleteBulkProjects);


router.delete('/:id', projectController.deleteProject);




module.exports = router