import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import InstalationType from './installation-type.js'
import AirPort from './airport.js'
const Installation = db.define(
  'Instalation',
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
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idTypeInst: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: InstalationType,
        key: 'id'
      }
    },
    idAirport: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: AirPort,
        key: 'id'
      }
    }
  },
  { timestamps: false }
)

export default Installation
