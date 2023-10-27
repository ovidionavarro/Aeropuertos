import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Client = db.define('Cliente', {
  nombre: DataTypes.STRING
})

export default Client
