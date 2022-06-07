import postsServices from '../services/posts.services.js'

async function createPost(req, res, next){
  try{
    const post = req.body
    if(!req.body.titulo || !req.body.conteudo){
      throw new Error('Blank field')
    }
    res.send(await postsServices.insertPost(post))
  }catch(err){
    next(err)
  }
}

async function getPosts(req, res, next){
  try{
    res.send(await postsServices.getPosts())
  }catch(err){
    next(err)
  }
}

async function createComent(req, res, next){
  try{
    const coment = req.body
    if(!req.body.nome || !req.body.conteudo){
      throw new Error('Blank field')
    }
    res.send(await postsServices.insertComent(coment))
  }catch(err){
    next(err)
  }
}

export default{
  getPosts,
  createComent,
  createPost
}