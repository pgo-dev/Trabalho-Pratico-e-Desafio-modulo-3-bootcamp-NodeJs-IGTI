import petsServices from '../services/pets.services.js'

async function getPets(req, res, next){
  try{
    const ownerId=parseInt(req.query.ownerId)
    res.send(await petsServices.getPets(ownerId))
  }catch(err){
    next(err)
  }
}

async function getPet(req, res, next){
  try{
    const id = req.params.id
    res.send(await petsServices.getPet(id))
  }catch(err){
    next(err)
  }
}

async function createPet(req, res, next){
  try{
    let pet = req.body
    if(!pet.name || !pet.type || !pet.ownerId){
      throw new Error('Blank field')
    }
    pet = await petsServices.insertPet(pet)
    res.send(pet)
  }catch(err){
    next(err)
  }
}

async function updatePet(req, res, next){
  try{
    let pet = req.body
    if(!pet.name || !pet.type || !pet.petId || !pet.ownerId){
      throw new Error('Blank field')
    }
    pet = await petsServices.updatePet(pet)
    res.send(pet)
  }catch(err){
    next(err)
  }
}

async function deletePet(req, res, next){
  try{
    const id = req.params.id
    res.send(await petsServices.deletePet(id))
  }catch(err){
    next(err)
  }
}

export default{
  getPets,
  getPet,
  createPet,
  updatePet,
  deletePet
}