import express from 'express'
const cors = require('cors')
const postRoutes =  require('./routes/postRoutes')
const categoryRoutes =  require('./routes/categoryRoutes')
const projectRoutes =  require('./routes/projectRoutes')
const middleware =  require('./middleware/test')

const app = express();
const PORT = 4000;


app.use(express.json());
app.use(cors());


// middleware
app.use('/', middleware.test);



// routes
app.use('/api/v0/posts', postRoutes);
app.use('/api/v0/categories', categoryRoutes);
app.use('/api/v0/projects', projectRoutes);


app.get('/', (req, res) => {

    const msg = {
        message: "Wellcome to my backend API" 
    };
    res.status(200).json(msg)
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