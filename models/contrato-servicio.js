import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import Cliente from './cliente.js'
import Servicio from './servicio.js'

const ContratoServicio = db.define('ContratoServicio', {
  servicio: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Servicio,
      key: 'id'
    }
  },
  cliente: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  },
  fecha: {
    type: DataTypes.TIME,
    allowNull: false,
    primaryKey: true
  },
  valoracion: {
    type: DataTypes.SMALLINT,
    allowNull: false
  }
})

export default ContratoServicio
