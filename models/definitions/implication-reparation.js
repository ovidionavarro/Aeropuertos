import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import WorkShopReparation from './workshop-reparation.js'
const Implication = db.define(
  'Implication',
  {
    ship1: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: WorkShopReparation,
        key: 'ship'
      }
    },
    date1: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      references: {
        model: WorkShopReparation,
        key: 'startDate'
      }
    },
    ship2: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: WorkShopReparation,
        key: 'ship'
      }
    },
    date2: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      references: {
        model: WorkShopReparation,
        key: 'startDate'
      }
    }
  },
  { timestamps: false }
)
export default Implication
