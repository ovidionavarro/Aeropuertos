import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import { defaultInstalationType } from '../../config/defaultValues.js'

const InstalationType = db.define('InstalationType', {
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
      const count = await InstalationType.count()
      if (count === 0) {
        await InstalationType.bulkCreate(defaultInstalationType)
      }
    }
  },
  timestamps: false
})
export default InstalationType
