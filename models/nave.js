import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import Cliente from './cliente.js'
import Clasificacion from './tipos/clasificacion-naves.js'
const Nave = db.define('Nave', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  capacidadCarga: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  numTrip: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  totalPlazas: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },

  propietario: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  },
  clasificacion: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: Clasificacion,
      key: 'tipoId'
    }
  }
})

export default Nave
