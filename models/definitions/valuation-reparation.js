import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Ship from './ship.js'

const ValuationReparation = db.define(
  'ValuationReparation',
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    valuation: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  { timestamps: false }
)

export default ValuationReparation
