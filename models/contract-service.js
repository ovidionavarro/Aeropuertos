import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import Client from './cliente.js'
import Service from './service.js'

const ContractService = db.define('ContractService', {
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
  fecha: {
    type: DataTypes.TIME,
    allowNull: false,
    primaryKey: true
  },
  valuation: {
    type: DataTypes.SMALLINT,
    allowNull: false
  }
})

export default ContractService
