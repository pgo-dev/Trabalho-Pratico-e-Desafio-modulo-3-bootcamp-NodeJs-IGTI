import servicesRepository from '../repositories/services.repository.js'
import petsRepository from '../repositories/pets.repository.js'
import ownersRepository from '../repositories/owners.repository.js'

async function insertService(service){
  const id = service.petId
  const pets = await petsRepository.getPet(id)
  if(pets==null){
    throw new Error('Unexistent pet.')
  }
  return await servicesRepository.insertService(service)
}

async function getServices(ownerId){
  if(ownerId){
    const owner = await ownersRepository.getOwner(ownerId)
    if(owner==null){
      throw new Error('Unexistent owner')
    }
  }
  const pets = await petsRepository.getPets(ownerId)
  const services = await getServicesArray(pets)
  if(services.length==0){
    throw new Error('This owner pets does not have services')
  }
  return services
}

async function getServicesArray(pets){
  let services = []
  for(let pet of pets){
    let service = await servicesRepository.getServices(pet.petId)
    services.push(service)
  }
  return services
}

export default{
  insertService,
  getServices
}