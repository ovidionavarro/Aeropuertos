import {
  Reparation,
  Installation,
  AirPort,
  WorkShopReparation,
  ReparationType,
  Client,
  ClientType,
  Passenger,
  Passengertype,
  Ship,
  Flight
} from './index.js'
Reparation.belongsTo(Installation, { foreignKey: 'idInstalation' })
Installation.hasMany(Reparation, { foreignKey: 'idInstalation' })

Installation.belongsTo(AirPort, { foreignKey: 'idAirport' })
AirPort.hasMany(Installation, { foreignKey: 'idAirport' })

WorkShopReparation.belongsTo(Reparation, { foreignKey: 'idReparation' })
Reparation.hasMany(WorkShopReparation, { foreignKey: 'idReparation' })

Reparation.belongsTo(ReparationType, { foreignKey: 'idReparationType' })
ReparationType.hasMany(Reparation, { foreignKey: 'idReparationType' })

Client.belongsTo(ClientType, { foreignKey: 'idClientType' })
ClientType.hasMany(Client, { foreignKey: 'idClientType' })

Passenger.belongsTo(Client, { foreignKey: 'idClient' })
Client.hasMany(Passenger, { foreignKey: 'idClient' })

Passenger.belongsTo(Passengertype, { foreignKey: 'idPassengerType' })
Passengertype.hasMany(Passenger, { foreignKey: 'idPassengerType' })

Passenger.belongsTo(Ship, { foreignKey: 'ship' })
Ship.hasMany(Passenger, { foreignKey: 'ship' })

Flight.belongsTo(Ship, { foreignKey: 'ship' })
Ship.hasMany(Flight, { foreignKey: 'ship' })

Flight.belongsTo(AirPort, { foreignKey: 'airport' })
AirPort.hasMany(Flight, { foreignKey: 'airport' })
export { Reparation, Installation, AirPort, WorkShopReparation, ReparationType }
