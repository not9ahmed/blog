import Router from 'express'
import upload from '../utils/filesUpload';
import { isAuthenticated } from '../middleware/auth';
const imageController = require('../controllers/imageController')



const router = Router();


/**
 * Will accept Form Data and images and update post object
 * Returns a message if the images upload is succeful
 */
router.post('/', upload.array('images', 12), imageController.createImages);


module.exports = router