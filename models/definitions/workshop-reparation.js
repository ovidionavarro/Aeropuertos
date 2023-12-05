import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Ship from './ship.js'
import Reparation from './reparation.js'

const WorkShopReparation = db.define(
  'WorkShopReparation',
  {
    ship: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Ship,
        key: 'id'
      }
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    finalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idReparation: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Reparation,
        key: 'id'
      }
    },
    time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    increase: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  },
  { timestamps: false }
)

export default WorkShopReparation
