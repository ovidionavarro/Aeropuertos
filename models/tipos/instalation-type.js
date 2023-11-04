import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'

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
})
export default InstalationType
