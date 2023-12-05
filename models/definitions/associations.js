import { Reparation, Installation, AirPort, WorkShopReparation, ReparationType } from './index.js'
Reparation.belongsTo(Installation, { foreignKey: 'idInstalation' })
Installation.hasMany(Reparation, { foreignKey: 'idInstalation' })

Installation.belongsTo(AirPort, { foreignKey: 'idAirport' })
AirPort.hasMany(Installation, { foreignKey: 'idAirport' })

WorkShopReparation.belongsTo(Reparation, { foreignKey: 'idReparation' })
Reparation.hasMany(WorkShopReparation, { foreignKey: 'idReparation' })

Reparation.belongsTo(ReparationType, { foreignKey: 'idReparationType' })
ReparationType.hasMany(Reparation, { foreignKey: 'idReparationType' })

export { Reparation, Installation, AirPort, WorkShopReparation, ReparationType }
