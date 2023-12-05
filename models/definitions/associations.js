import { Reparation, Installation, AirPort, ReparationType } from './index.js'
Reparation.belongsTo(Installation, { foreignKey: 'idInstalation' })
Installation.hasMany(Reparation, { foreignKey: 'idInstalation' })

Installation.belongsTo(AirPort, { foreignKey: 'idAirport' })
AirPort.hasMany(Installation, { foreignKey: 'idAirport' })

Reparation.belongsTo(ReparationType, { foreignKey: 'idReparationType' })
ReparationType.hasMany(Reparation, { foreignKey: 'idReparationType' })

export { Reparation, Installation, AirPort }
