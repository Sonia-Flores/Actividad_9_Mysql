const router = require('express').Router();
const PostsController = require('../../controllers/posts.controller');

router.get('/', PostsController.getAllPosts);
router.get('/:IdAutor', PostsController.getAllPostsByAutor);

router.post('/', PostsController.insertPost);

module.exports = router;