import Router from 'express'
import upload from '../utils/filesUpload';
const imageController = require('../controllers/imageController')
import { fileLimitHandler } from '../utils/fileMiddleware';



const router = Router();


router.get('/', imageController.findAllImages);
router.get('/:id([0-9]+)', imageController.findImageById);


/**
 * Will accept Form Data and images and update post object
 * Returns a message if the images upload is succeful
 */
router.post('/', upload.array('images', 12), imageController.createImages);




router.delete('/:id([0-9]+)', imageController.deleteImage)


// middleware for handling specifc router
// can be applied for other router
router.use(fileLimitHandler)

module.exports = router