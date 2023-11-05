import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Instalation from './instalation.js'
const Service = db.define('Service', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  idInstalation: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Instalation,
      key: 'id'
    }
  }
})

export default Service
