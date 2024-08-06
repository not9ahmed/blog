import express from 'express'
const cors = require('cors')

// file upload
import 'multer'
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' })

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void


const storage = multer.diskStorage({

    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        callback(null, 'uploads/')
    },

    filename: (
        req: Request, 
        file: Express.Multer.File, 
        callback: FileNameCallback
    ): void => {

        console.log("file.originalname", file.originalname)
        const uniqueSuffix = file.originalname
        callback(null, uniqueSuffix)



        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname
        // callback(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })



// middleware
const middleware =  require('./middleware/test')

// routes
const postRoutes =  require('./routes/postRoutes')
const categoryRoutes =  require('./routes/categoryRoutes')
const projectRoutes =  require('./routes/projectRoutes')

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