import express from 'express'
import ownersControllers from '../controllers/owners.controllers.js'

const router = express.Router()

router.post('/', ownersControllers.createOwner)
router.get('/', ownersControllers.getOwners)
router.get('/:id', ownersControllers.getOwner)
router.put('/', ownersControllers.updateOwner)
router.delete('/:id', ownersControllers.deleteOwner)

export default router