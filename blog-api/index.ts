import express from 'express'
const cors = require('cors')
const cookieParser = require('cookie-parser')
import { Request, Response, NextFunction } from 'express'
// const methodOverride = require('method-override')


// middleware
const middleware =  require('./middleware/test');
import upload from './utils/filesUpload';

// Declaring routes
const postRoutes =  require('./routes/post');
const categoryRoutes =  require('./routes/category');
const projectRoutes =  require('./routes/project');
const skillRoutes =  require('./routes/skill');
const skillTypeRoutes =  require('./routes/skillType');

const app = express();
const PORT = 4000;


// MIDDLEWARE 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// load the cookie-parsing middleware
app.use(cookieParser())

// app.use(methodOverride());
// app.use(logErrors)
// app.use(clientErrorHandler)
// app.use(errorHandler)


// middleware will be used on all
app.use('/', middleware.test);




// routes
app.use('/api/v0/posts', postRoutes);
app.use('/api/v0/categories', categoryRoutes);
app.use('/api/v0/projects', projectRoutes);
app.use('/api/v0/skills', skillRoutes);
app.use('/api/v0/skillTypes', skillTypeRoutes);


// home route
app.get('/', (req, res) => {

    const msg = {
        message: "Wellcome to my backend API" 
    };
    res.status(200).json(msg)
})


// file upload route
app.post('/photos/upload', upload.array('photos', 12), function (req , res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any


    const fileUpload = req.files

    console.log("fileUpload", fileUpload);


    console.log("req.body", req.body);
    // console.log("req.files", req.file );



    res.status(200).send({
        msg: `file upload route`
    })
})




// Invalid routees Handlder
app.get('/*', (req, res) => {
    const msg = {
        message: "Invalid route" 
    };
    
    res.status(404).json(msg);

    // to redirect
    // res.status(404).json(msg).redirect('/');
})


// // error handling
// function logErrors (err: any, req: Request, res: Response, next: NextFunction) {
//     console.error('log errors: ' + err.stack)
//     next(err)
// }

// function clientErrorHandler (err: any, req: Request, res: Response, next: NextFunction) {
//     if (req.xhr) {
//       res.status(500).send({ error: 'Something failed!' })
//     } else {
//       next(err)
//     }
// }

// function errorHandler (err: any, req: Request, res: Response, next: NextFunction) {
//     res.status(500)
//     res.render('error', { error: err })
// }






app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})