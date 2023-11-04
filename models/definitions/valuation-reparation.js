import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import WorkShopReparation from './workshop-reparation.js'

const ValuationReparation = db.define('ValuationReparation', {
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
    type: DataTypes.TIME,
    allowNull: false,
    primaryKey: true,
    references: {
      model: WorkShopReparation,
      key: 'dateInit'
    }
  },
  valuation: {
    type: DataTypes.SMALLINT,
    allowNull: false
  }
})
export default ValuationReparation
