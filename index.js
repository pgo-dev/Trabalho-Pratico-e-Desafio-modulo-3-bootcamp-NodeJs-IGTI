import express from 'express'
import ownersRouter from './routes/owners.router.js'
import petsRouter from './routes/pets.router.js'
import servicesRouter from './routes/services.router.js'
import postsRouter from './routes/posts.router.js'

const app = express()
app.use(express.json())

//routes
app.use('/owners', ownersRouter)
app.use('/pets', petsRouter)
app.use('/services', servicesRouter)
app.use('/posts', postsRouter)

//Error:
app.use((err, req, res, next)=>{
  //console.log(err)
  res.status(400).send({error:err.message})
})

//Port:
app.listen(3000, ()=> console.log('API Started!'))