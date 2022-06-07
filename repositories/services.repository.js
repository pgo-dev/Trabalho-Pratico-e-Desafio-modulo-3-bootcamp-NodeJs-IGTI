import Service from '../models/service.model.js'

async function insertService(service){
  try {
    return await Service.create(service)
  } catch (err) {
    throw err
  }
}

async function getServices(petId){
  try{
    if(petId){
      return await Service.findAll({
        where:{
          petId
        },
        raw: true
      })
    }
    return await Service.findAll()
  }catch(err){
    throw err
  }
}

export default{
  insertService,
  getServices
}