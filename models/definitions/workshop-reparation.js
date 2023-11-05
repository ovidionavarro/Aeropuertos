import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
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
    type: DataTypes.DATE,
    allowNull: false,
    primaryKey: true
  },
  dateFin: {
    type: DataTypes.DATE,
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
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  increase: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
})

export default WorkShopReparation
