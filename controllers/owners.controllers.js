import ownersServices from '../services/owners.services.js'

async function getOwners(req, res, next){
  try{
    res.send(await ownersServices.getOwners())
  }catch(err){
    next(err)
  }
}

async function getOwner(req, res, next){
  try{
    const id = req.params.id
    res.send(await ownersServices.getOwner(id))
  }catch(err){
    next(err)
  }
}

async function createOwner(req, res, next){
  try{
    let owner = req.body
    if(!owner.name || !owner.phone){
      throw new Error('Blank field')
    }
    owner = await ownersServices.insertOwner(owner)
    res.send(owner)
  }catch(err){
    next(err)
  }
}

async function updateOwner(req, res, next){
  try{
    let owner = req.body
    if(!owner.name || !owner.phone || !owner.ownerId){
      throw new Error('Blank field')
    }
    owner = await ownersServices.updateOwner(owner)
    res.send(owner)
  }catch(err){
    next(err)
  }
}

async function deleteOwner(req, res, next){
  try{
    const id = req.params.id
    res.send(await ownersServices.deleteOwner(id))
  }catch(err){
    next(err)
  }
}

export default{
  getOwners,
  getOwner,
  createOwner,
  updateOwner,
  deleteOwner
}