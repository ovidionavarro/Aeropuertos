import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import TipoInst from './tipos/tipo-instalacion.js'
import Aeropuerto from './aeropuerto.js'
const Instalacion = db.define('Instalacion', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  ubicacion: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  tipoInst: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: TipoInst,
      key: 'tipoId'
    }
  },
  idAeropuerto: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Aeropuerto,
      key: 'id'
    }
  }
})

export default Instalacion
