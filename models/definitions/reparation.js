import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import ReparationType from './reparation-type.js'

const Reparation = db.define('Reparation', {
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
  idTypeReparation: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: ReparationType,
      key: 'id'
    }
  }
})

export default Reparation
