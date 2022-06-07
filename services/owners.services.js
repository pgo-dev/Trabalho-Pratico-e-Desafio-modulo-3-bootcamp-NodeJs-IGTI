import ownersRepository from '../repositories/owners.repository.js'
import petsRepository from '../repositories/pets.repository.js'

async function insertOwner(owner){
  return await ownersRepository.insertOwner(owner)
}

async function getOwners(){
  return await ownersRepository.getOwners()
}

async function getOwner(id){
  return await ownersRepository.getOwner(id)
}

async function deleteOwner(id){
  const pets = await petsRepository.getPets(id)
  console.log(pets)
  if(pets.length>0){
    throw new Error('Owner still have pets')
  }
  return await ownersRepository.deleteOwner(id)
}

async function updateOwner(owner){
  return await ownersRepository.updateOwner(owner)
}


export default{
  insertOwner,
  getOwners,
  getOwner,
  deleteOwner,
  updateOwner
}
