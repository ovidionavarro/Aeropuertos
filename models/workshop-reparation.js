import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import Ship from './ship.js'
import Reparation from './reparation.js'

const WorkShopReparation = db.define('WorkShopReparation', {
  ship: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Ship,
      key: 'id'
    }
  },
  dateInit: {
    type: DataTypes.TIME,
    allowNull: false,
    primaryKey: true
  },
  dateFin: {
    type: DataTypes.TIME,
    allowNull: false
  },
  idReparation: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Reparation,
      key: 'id'
    }
  },
  time: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  increase: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  discount: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
})

export default WorkShopReparation
