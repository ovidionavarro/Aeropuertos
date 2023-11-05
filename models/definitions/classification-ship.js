import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'

const Classification = db.define(
  'Classification',
  {
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
  },
  { timestamps: false }
)
export default Classification
