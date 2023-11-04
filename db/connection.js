import { Sequelize } from 'sequelize'

const db = new Sequelize('aeropuertos_db', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false
})
export default db
