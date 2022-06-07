import postsRepository from '../repositories/posts.repository.js'

async function insertPost(post){
  return await postsRepository.insertPost(post)
}

async function getPosts(){
  return await postsRepository.getPosts()
}

async function insertComent(coment){
  return await postsRepository.insertComent(coment)
}

export default{
  insertPost,
  getPosts,
  insertComent
}