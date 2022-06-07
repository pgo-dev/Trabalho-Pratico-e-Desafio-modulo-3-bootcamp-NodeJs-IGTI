import express from 'express'
import petsControllers from '../controllers/pets.controllers.js'

const router = express.Router()

router.post('/', petsControllers.createPet)
router.get('/', petsControllers.getPets)
router.get('/:id', petsControllers.getPet)
router.put('/', petsControllers.updatePet)
router.delete('/:id', petsControllers.deletePet)

export default router