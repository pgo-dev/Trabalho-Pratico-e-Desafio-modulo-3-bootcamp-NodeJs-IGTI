import servicesServices from '../services/services.services.js'

async function createService(req, res, next){
  try {
    let service = req.body
    if(!req.body.description || !req.body.value || !req.body.petId){
      throw new Error('Blank fields')
    }
    service = await servicesServices.insertService(service)
    res.send(service)
  } catch (err) {
    next(err)
  }
}

async function getServices(req, res, next){
  try {
    const ownerId = req.query.ownerId
    res.send(await servicesServices.getServices(ownerId))
  } catch (err) {
    next(err)
  }
}

export default{
  createService,
  getServices
}