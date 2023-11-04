import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import TipoCliente from './tipos/tipo-cliente.js'
import { defaultCliente } from '../config/defaultValues.js'

const Cliente = db.define('Cliente', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  nacionalidad: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  tipoClient: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    references: {
      model: TipoCliente,
      key: 'tipoId'
    }
  }
}, {
  hooks: {
    afterSync: async () => {
      const count = await Cliente.count()
      if (count === 0) {
        await Cliente.bulkCreate(defaultCliente)
      }
    }
  },
  timestamps: false
})

export default Cliente
