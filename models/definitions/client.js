import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import ClientType from './client-type.js'

const Client = db.define(
  'Client',
  {
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
    nationality: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idClientType: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: ClientType,
        key: 'id'
      }
    }
  },
  { timestamps: false }
)

export default Client
