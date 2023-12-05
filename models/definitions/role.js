import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import { defaultRoles } from '../../config/defaultValues.js'
const Role = db.define(
  'Role',
  {
    roleId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    roleName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  },
  {
    hooks: {
      afterSync: async () => {
        const count = await Role.count()
        if (count === 0) {
          await Role.bulkCreate(defaultRoles)
        }
      }
    },
    timestamps: false
  }
)
export default Role
