import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import PassengerType from './passenger-type.js'
import Ship from './ship.js'
import Client from './client.js'

const Passenger = db.define('Passenger', {
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
    type: DataTypes.TIME,
    primaryKey: true,
    allowNull: false
  },
  idClient: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Client,
      key: 'id'
    }
  },
  idTypePassenger: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: PassengerType,
      key: 'id'
    }
  }
})
export default Passenger
