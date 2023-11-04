import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Client from './client.js'
import Classification from './classification-ship.js'
const Ship = db.define('Ship', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  capacity: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  numberCrews: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  totalPlazas: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },

  owner: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Client,
      key: 'id'
    }
  },
  clasification: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: Classification,
      key: 'id'
    }
  }
})

export default Ship
