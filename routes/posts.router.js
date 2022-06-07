import express from 'express'
import postsControllers from '../controllers/posts.controllers.js'

const router = express.Router()

router.post('/', postsControllers.createPost)
router.get('/', postsControllers.getPosts)
router.post('/comentario',postsControllers.createComent)

export default router