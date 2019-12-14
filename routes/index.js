const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))
// get all posts
router.get('/posts', controllers.getAllPosts);
// get post by Id
router.get('/posts/:postId', controllers.getPostById)
// create a post
router.post('/posts', controllers.createPost);
// update a post
router.put('/posts/:postId', controllers.updatePost)
// delete a post
router.delete('/posts/:postId', controllers.deletePost)

module.exports = router;