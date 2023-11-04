import { DataTypes } from 'sequelize'
import db from '../../db/connection.js'
import { defaultTipoCliente } from '../../config/defaultValues.js'

const TipoCliente = db.define('TipoCliente', {
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
}, {
  hooks: {
    afterSync: async () => {
      const count = await TipoCliente.count()
      if (count === 0) {
        await TipoCliente.bulkCreate(defaultTipoCliente)
      }
    }
  },
  timestamps: false
})
export default TipoCliente
