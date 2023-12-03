import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Client from './client.js'
import Service from './service.js'

const ContractService = db.define(
  'ContractService',
  {
    service: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Service,
        key: 'id'
      }
    },
    client: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Client,
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    valuation: {
      allowNull: true,
      type: DataTypes.SMALLINT
    }
  },
  { timestamps: false }
)

export default ContractService
