import "dotenv/config"
import Sequelize from 'sequelize'

const url = process.env.URL4

const sequelize = new Sequelize(
  url,
  {
    dialect:'postgres',
    define:{
      timestamps: false
    }
  }
)

export default sequelize