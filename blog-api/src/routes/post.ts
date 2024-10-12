import Router from 'express'
import upload from '../utils/filesUpload';
import { isAuthenticated } from '../middleware/auth';

const router = Router();

const postController = require('../controllers/postController');


router.get('/', postController.findAll);
router.get('/:id', postController.findById);
router.post('/', postController.create);

// trying auth middleware
router.post('/bulk', postController.createBulk);

router.put('/:id', postController.update);

router.delete('/bulk', postController.deleteBulk);
router.delete('/:id', postController._delete);

/**
 * Will accept Form Data and images and update post object
 * Returns a message if the images upload is succeful
 */
router.post('/:id/images', upload.array('images', 12), postController.uploadImages);


module.exports = router