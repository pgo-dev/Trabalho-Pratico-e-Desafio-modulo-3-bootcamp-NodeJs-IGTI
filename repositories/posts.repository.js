import { getClient } from './mongodb.js'
import { ObjectId } from 'mongodb'

async function insertPost(post){
  const client = getClient()
  try{
    await client.connect()
    return await client.db('Petshop').collection('posts').insertOne(post)
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function getPosts(){
  const client = getClient()
  try{
    await client.connect()
    return await client.db('Petshop').collection('posts').find({}).toArray()
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function updatePost(post){
  const client = getClient()
  try{
    await client.connect()
    return await client.db('Petshop').collection('posts').updateOne({
      _id: post._id
    },{
      $set:{...post}
    })
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

async function insertComent(coment){
  const client = getClient()
  try{
    await client.connect()
    const id = coment.postId
    const post = await client.db('Petshop').collection('posts').findOne({_id: new ObjectId(id)})
    post.comentarios.push({nome: coment.nome, conteudo:coment.conteudo})
    return await updatePost(post)
  }catch(err){
    throw err
  }finally{
    await client.close()
  }
}

export default{
  insertPost,
  getPosts,
  insertComent,
}