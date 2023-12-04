import { Reparation, Installation, AirPort } from './index.js'
Reparation.belongsTo(Installation, { foreignKey: 'idInstalation' })
Installation.hasMany(Reparation, { foreignKey: 'idInstalation' })
AirPort.belongsTo(Installation, { foreiginKey: 'idAirport' })
Installation.hasOne(AirPort, { foreignKey: 'idAirport' })
export { Reparation, Installation, AirPort }
