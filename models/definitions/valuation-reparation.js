import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Ship from './ship.js'
// la nave tiene que pertenecer al conjunto de naves reparadas
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
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  },
  { timestamps: false }
)

export default ValuationReparation
