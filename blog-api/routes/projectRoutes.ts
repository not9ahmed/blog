import Router from 'express'
const projectController = require('../controllers/projectController');
const projects = require('../models/projects.json');


const router = Router();

router.get('/', (req, res) => {


    console.log("Hello from project route");

    res.send(projects);
})

module.exports = router