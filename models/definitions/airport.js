import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
const AirPort = db.define(
  'AirPort',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    geoPos: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    direction: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    }
  },
  { timestamps: false }
)

export default AirPort
