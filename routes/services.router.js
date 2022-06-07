import express from 'express'
import servicesControllers from '../controllers/services.controller.js'

const router = express.Router()

router.post('/', servicesControllers.createService)
router.get('/', servicesControllers.getServices)

export default router