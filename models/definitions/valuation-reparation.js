import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import WorkShopReparation from './workshop-reparation.js'

const ValuationReparation = db.define(
  'ValuationReparation',
  {
    ship: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: WorkShopReparation,
        key: 'ship'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      references: {
        model: WorkShopReparation,
        key: 'startDate'
      }
    },
    valuation: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  },
  { timestamps: false }
)
export default ValuationReparation
