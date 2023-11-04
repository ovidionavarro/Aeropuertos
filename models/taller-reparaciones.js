import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import Nave from './nave.js'
import Reparacion from './reparacion.js'

const TallerReparacion = db.define('TallerReparacion', {
  nave: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Nave,
      key: 'id'
    }
  },
  fechaInit: {
    type: DataTypes.TIME,
    allowNull: false,
    primaryKey: true
  },
  fechaFin: {
    type: DataTypes.TIME,
    allowNull: false
  },
  reparacion: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Reparacion,
      key: 'id'
    }
  },
  tiemo: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  aumento: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  descuento: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
})

export default TallerReparacion
