import { Sequelize } from 'sequelize'
import AirPort from './definitions/airport.js'
import Client from './definitions/client.js'
import Flight from './definitions/flight.js'
import Passengertype from './definitions/passenger-type.js'
import Ship from './definitions/ship.js'
import ModelConstructor from './model-constructor.js'
class PassengerModel extends ModelConstructor {
  getJoseMartiAirportClientsByTypeAndShip = async () => {
    const result = await this.Model.findAll({
      include: [
        {
          model: Client,
          attributes: ['name', 'idClientType']
        },
        {
          model: Passengertype,
          where: { id: 1 }
        },
        {
          model: Ship,
          attributes: ['owner'],
          include: {
            model: Flight,
            include: {
              model: AirPort,
              attributes: ['name'],
              where: { name: 'Jose Marti' }
            }
          }
        }
      ],
      raw: true
    })
    const values = []
    result.forEach((element) => {
      if (element['Ship.Flights.date'] !== null) {
        if (element.date.toISOString() === element['Ship.Flights.date'].toISOString()) {
          values.push({
            client_name: element['Client.name'],
            client_type: element['Client.idClientType']
          })
        }
      }
    })
    return values
  }
}

export default PassengerModel
