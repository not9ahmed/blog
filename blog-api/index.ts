import express from 'express'
const cors = require('cors')
const postRoutes =  require('./routes/postRoutes')
const categoryRoutes =  require('./routes/categoryRoutes')
const projectRoutes =  require('./routes/projectRoutes')

const app = express();
const PORT = 4000;


app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes);
app.use('/categories', categoryRoutes);
app.use('/projects', projectRoutes);


app.get('/', (req, res) => {

    const msg = {
        msg: "hello world" 
    };
    res.send(msg)
})






app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})