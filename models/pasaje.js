import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import TipoPasajero from './tipos/tipo_pasajero'
import Nave from './nave.js'
import Cliente from './cliente'

const Pasaje = db.define('Pasaje', {
  nave: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Nave,
      key: 'id'
    }
  },
  fecha: {
    type: DataTypes.TIME,
    primaryKey: true,
    allowNull: false
  },
  cliente: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  },
  tipoPasajero: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: TipoPasajero,
      key: 'tipoId'
    }
  }
})
export default Pasaje
