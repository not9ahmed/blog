import Router from 'express'

const router = Router();

router.get('/', (req, res) => {
    return res.json({
        something: "name"
    })
});

module.exports = router