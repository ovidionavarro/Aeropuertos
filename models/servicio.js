import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import Instalacion from './instalacion.js'
const Servicio = db.define('Servicio', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  instalacion: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Instalacion,
      key: 'id'
    }
  }
})

export default Servicio
