import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import TallerReparacion from './taller-reparaciones.js'
const Implicacion = db.define('Implicacion', {
  nave1: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: TallerReparacion,
      key: 'nave'
    }
  },
  fecha1: {
    type: DataTypes.TIME,
    allowNull: false,
    primaryKey: true,
    references: {
      model: TallerReparacion,
      key: 'fechaInit'
    }
  },
  nave2: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    references: {
      model: TallerReparacion,
      key: 'nave'
    }
  },
  fecha2: {
    type: DataTypes.TIME,
    allowNull: false,
    primaryKey: true,
    references: {
      model: TallerReparacion,
      key: 'fechaInit'
    }
  }
})
export default Implicacion
