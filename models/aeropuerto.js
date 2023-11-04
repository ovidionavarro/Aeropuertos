import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
const Aeropuerto = db.define('Aeropuerto', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  posGeo: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  },
  Direccion: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  }
})

export default Aeropuerto
