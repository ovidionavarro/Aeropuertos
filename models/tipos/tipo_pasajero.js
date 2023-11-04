import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'

const TipoPasajero = db.define('TipoPasajero', {
  tipoId: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tipoName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  }
})
export default TipoPasajero
