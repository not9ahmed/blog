import Router from 'express'
const categoriesController = require('../controllers/categories')

const router = Router()

router.get('/', (req, res) => {

    res.json("Hello from categories controllers");
})

module.exports = router