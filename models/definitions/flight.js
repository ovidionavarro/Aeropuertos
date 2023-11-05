import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Ship from './ship.js'
import AirPort from './airport.js'

const Flight = db.define(
  'Flight',
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
      primaryKey: true,
      allowNull: false
    },
    airport: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: AirPort,
        key: 'id'
      }
    },
    plannedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  { timestamps: false }
)

export default Flight
