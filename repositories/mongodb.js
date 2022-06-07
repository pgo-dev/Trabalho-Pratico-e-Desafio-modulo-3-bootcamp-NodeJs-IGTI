import mongodb from 'mongodb'
import "dotenv/config"

function getClient(){
  const uri = process.env.URL3
  return new mongodb.MongoClient(uri)
}

export {
  getClient
}