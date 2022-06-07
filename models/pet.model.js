import Sequelize from 'sequelize'
import db from '../repositories/db.js'
import Owner from './owner.model.js'

const Pet = db.define('pets',{
  petId:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name:{
    type: Sequelize.STRING,
    allowNull:false
  },
  type:{
    type: Sequelize.STRING,
    allowNull:false
  }
},{
  underscored: true
})

Pet.belongsTo(Owner, {foreignKey: 'ownerId'})

export default Pet