import express from 'express'
const cors = require('cors')


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


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}))


// middleware
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




// Invalid routes Handlder
app.get('/*', (req, res) => {
    const msg = {
        message: "Invalid route" 
    };
    
    res.status(404).json(msg);


    // to redirect
    // res.status(404).json(msg).redirect('/');
})






app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})