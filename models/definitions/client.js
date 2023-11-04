import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'

const Client = db.define('Client', {
  name: DataTypes.STRING
})

export default Client
