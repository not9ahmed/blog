import Router from 'express'
const projectController = require('../controllers/projectController');
const projects = require('../models/projects.json');


const router = Router();

router.get('/', (req, res) => {

    const q = req.query;

    console.log("q", q);


    console.log("Hello from project route");

    res.send(projects);
})


router.get('/:id', (req, res) => {

    const id: number = parseInt(req.params.id ?? -1);


    // null or number
    if(!id){
        res.send({
            message: "No id passed"
        });
    }

    console.log("Hello from project route");

    res.send(projects[id-1]);
})


// route to create project
router.post('/', (req, res) => {



    res.send({
        message: "posts created"
    });
})


// route to update projects
router.put('/:id', (req, res) => {

    const id: number = parseInt(req.params.id ?? -1);


    res.send({
        message: `projects update ${id}`
    })
})


// route to delete projects
// 202
// 204
router.delete('/:id', (req, res) => {

    const id: number = parseInt(req.params.id ?? -1);


    res.send({
        message: `project deleted ${id}`
    })
})






module.exports = router