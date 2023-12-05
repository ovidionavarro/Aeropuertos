import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import ReparationType from './reparation-type.js'
import Installation from './installation.js'

const Reparation = db.define(
  'Reparation',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priceHour: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    idReparationType: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: ReparationType,
        key: 'id'
      }
    },
    idInstalation: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Installation,
        key: 'id'
      }
    },
    activity: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  { timestamps: false }
)

export default Reparation
