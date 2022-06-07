import Pet from '../models/pet.model.js'

async function insertPet(pet){
  try{
    return await Pet.create(pet)
  }catch(err){
    throw err
  }
}

async function getPets(ownerId){
  try{
    if(ownerId){
      return await Pet.findAll({
        where:{
          ownerId: ownerId
        },
        raw: true
      })
    }
    return await Pet.findAll()
  }catch(err){
    throw err
  }
}

async function getPet(id){
  try{
    return await Pet.findByPk(id,{ raw: true})
  }catch(err){
    throw err
  }
}

async function updatePet(pet){
  try{
    await Pet.update(pet,{
      where:{
        petId: pet.petId
      }
    })
    return await getPet(pet.petId)
  }catch(err){
    throw err
  }
}

async function deletePet(id){
  try{
    await Pet.destroy({
      where: {
        petId: id
      }
    })
  }catch(err){
    throw err
  }
}

export default{
  insertPet,
  getPets,
  getPet,
  deletePet,
  updatePet
}