import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import Role from './role.js'
import { defaultAdmin } from '../../config/defaultValues.js'
const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
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
    roleId: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: Role,
        key: 'roleId'
      }
    }
  },
  {
    hooks: {
      afterSync: async () => {
        const count = await User.count()
        if (count === 0) {
          await User.bulkCreate(defaultAdmin)
        }
      }
    },
    timestamps: false
  }
)

export default User
