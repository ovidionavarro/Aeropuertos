import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import { defaultClientType } from '../../config/defaultValues.js'

const ClientType = db.define('ClientType', {
  id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  }
}, {
  hooks: {
    afterSync: async () => {
      const count = await ClientType.count()
      if (count === 0) {
        await ClientType.bulkCreate(defaultClientType)
      }
    }
  },
  timestamps: false
})
export default ClientType
