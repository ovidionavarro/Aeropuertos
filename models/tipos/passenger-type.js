import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import { defaultPassengerType } from '../../config/defaultValues.js'

const Passengertype = db.define('PassengerType', {
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
      const count = await Passengertype.count()
      if (count === 0) {
        await Passengertype.bulkCreate(defaultPassengerType)
      }
    }
  },
  timestamps: false
})
export default Passengertype
