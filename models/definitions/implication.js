import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Ship from './ship.js'

const Implication = db.define(
  'Implication',
  {
    ship1: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Ship,
        key: 'id'
      }
    },
    startDate1: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    ship2: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Ship,
        key: 'id'
      }
    },
    startDate2: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    }
  },
  { timestamps: false }
)

export default Implication
