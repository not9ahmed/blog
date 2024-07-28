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

    const idStr: string = req.params.id || "";


    const id: number = parseInt(idStr) || -1;


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



    res.send("posts created");
})


// route to update projects
router.put('/:id', (req, res) => {

    res.send("projects update")
})


// route to delete projects
// 202
// 204
router.delete('/:id', (req, res) => {

    res.send("project deleted")
})


// route to search projects
// 202
// 204
// router.get('/', (req, res) => {

//     const q = req.query;

//     console.log("q", q);


//     res.send("project search")
// })



module.exports = router