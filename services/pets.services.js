import petsRepository from '../repositories/pets.repository.js'
import ownerRepository from '../repositories/owners.repository.js'

async function insertPet(pet){
  const owner = await ownerRepository.getOwner(pet.ownerId)
  if(owner==null){
    throw new Error('Unexistent Owner')
  }
  return await petsRepository.insertPet(pet)
}

async function getPets(ownerId){
  if(ownerId){
    const owner = await ownerRepository.getOwner(ownerId)
    if(owner==null){
      throw new Error('Unexistent Owner')
    }
  }
  return await petsRepository.getPets(ownerId)
}

async function getPet(id){
  return await petsRepository.getPet(id)
}

async function deletePet(id){
  return await petsRepository.deletePet(id)
}

async function updatePet(pet){
  const owner = await ownerRepository.getOwner(pet.ownerId)
  console.log(owner)
  if(owner==null){
    throw new Error('Unexistent owner')
  }
  return await petsRepository.updatePet(pet)
}


export default{
  insertPet,
  getPets,
  getPet,
  deletePet,
  updatePet
}