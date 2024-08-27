import Router from 'express'
import { Request, Response} from 'express'
const projectController = require('../controllers/projectController');
const projects = require('../db_scripts/data/projects.json');


const router = Router();

router.get('/', projectController.findAllProjects)


router.get('/:id', (req: Request, res: Response) => {

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
router.post('/', (req: Request, res: Response) => {



    res.send({
        message: "posts created"
    });
})


// route to update projects
router.put('/:id', (req: Request, res: Response) => {

    const id: number = parseInt(req.params.id ?? -1);


    res.send({
        message: `projects update ${id}`
    })
})


// route to delete projects
// 202
// 204
router.delete('/:id', (req: Request, res: Response) => {

    const id: number = parseInt(req.params.id ?? -1);


    res.send({
        message: `project deleted ${id}`
    })
})






module.exports = router