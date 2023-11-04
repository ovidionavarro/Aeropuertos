import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import TipoReparacion from './tipos/tipo-reparacion.js'

const Reparacion = db.define('Reparacion', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precioXhora: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  tipoReparacion: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: TipoReparacion,
      key: 'id'
    }
  }
})

export default Reparacion
