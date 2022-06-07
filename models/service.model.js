import Sequelize from 'sequelize'
import db from '../repositories/db.js'
import Pet from './pet.model.js'

const Service = db.define('services',{
  serviceId:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  description:{
    type: Sequelize.STRING,
    allowNull:false
  },
  value:{
    type: Sequelize.DOUBLE,
    allowNull:false
  }
},{
  underscored: true
})

Service.belongsTo(Pet, {foreignKey: 'petId'})

export default Service