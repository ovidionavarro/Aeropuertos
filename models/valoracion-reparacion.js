import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import TallerReparacion from './taller-reparaciones.js'

const ValoracionRep = db.define('valoracionRep', {
  nave: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: TallerReparacion,
      key: 'nave'
    }
  },
  fecha: {
    type: DataTypes.TIME,
    allowNull: false,
    primaryKey: true,
    references: {
      model: TallerReparacion,
      key: 'fechaInit'
    }
  },
  valoracion: {
    type: DataTypes.SMALLINT,
    allowNull: false
  }
})
export default ValoracionRep
