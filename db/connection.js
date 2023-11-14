import { Sequelize } from 'sequelize'

const db = new Sequelize('aeropuertos_db', process.env.DATABASE_USER, process.env.DATABASE_PASS, {
  dialect: 'mysql',
  host: 'localhost',
  logging: false
})
export default db
