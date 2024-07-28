import express from 'express'
const cors = require('cors')
const postsRoutes =  require('./routes/postRoutes')
const categoriesRoutes =  require('./routes/categoryRoutes')

const app = express();
const PORT = 4000;


app.use(cors());

app.use('/posts', postsRoutes);
app.use('/categories', categoriesRoutes);


app.get('/', (req, res) => {

    const msg = {
        msg: "hello world" 
    };
    res.send(msg)
})






app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})