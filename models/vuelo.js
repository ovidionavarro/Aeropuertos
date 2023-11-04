import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import Nave from './nave.js'
import Aeropuerto from './aeropuerto.js'

const Vuelo = db.define('Vuelo', {
  nave: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Nave,
      key: 'id'
    }
  },
  fecha: {
    type: DataTypes.TIME,
    primaryKey: true,
    allowNull: false
  },
  aeropuerto: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Aeropuerto,
      key: 'id'
    }
  },
  fechaPlanificada: {
    type: DataTypes.TIME,
    allowNull: false
  }
})

export default Vuelo
