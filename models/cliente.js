import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import ClientType from './tipos/client-type.js'

const Client = db.define('Client', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  nacionality: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  idTypeClient: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: ClientType,
      key: 'id'
    }
  }
})

export default Client
