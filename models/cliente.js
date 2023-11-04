import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import ClientType from './tipos/client-type.js'
import { defaultClient } from '../config/defaultValues.js'

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
}, {
  hooks: {
    afterSync: async () => {
      const count = await Client.count()
      if (count === 0) {
        await Client.bulkCreate(defaultClient)
      }
    }
  },
  timestamps: false
})

export default Client
