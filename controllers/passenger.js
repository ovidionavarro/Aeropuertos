import { validatePassenger } from '../schemas/passenger.js'

export default class PassengerController {
  constructor(Passenger, Flight, Client, PassengerType) {
    this.Passenger = Passenger
    this.Flight = Flight
  }

  getAll = async (req, res) => {
    const _types = await this.Passenger.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const body = req.body

    // validando atributos con zod
    const result = validatePassenger(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    // validando foraneas
    const { ship, date, ...rest } = body
    const fl = { ship, date }
    const dataValues = await this.Flight.find(fl)
    if (dataValues.length === 0) {
      return res.status(401).json({
        msg: 'no existe ese vuelo'
      })
    }
    rest.ship = ship
    rest.date = new Date(date)
    const type = await this.Passenger.create(rest)
    res.status(201).json({
      type
    })
  }

  delete = async (req, res) => {
    const { shipOld, dateOld, idClientOld } = req.query
    const query = {
      ship: shipOld,
      date: dateOld,
      idClient: idClientOld
    }
    const ok = await this.Passenger.delete(query)
    res.json({
      ok
    })
  }

  update = async (req, res) => {
    const { shipOld, dateOld, idClientOld } = req.query
    const query = {
      ship: shipOld,
      date: dateOld,
      idClient: idClientOld
    }
    const type = await this.Passenger.findById(query)
    if (typeof type === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    const body = req.body

    // validando atributos con zod
    const result = validatePassenger(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }

    const { ship, date, ...rest } = body
    const query2 = { ship, date }
    const dataValues = await this.Flight.find(query2)
    if (!dataValues) {
      return res.status(401).json({
        msg: 'no existe ese vuelo'
      })
    }
    rest.ship = ship
    rest.date = date
    const ok = await this.Passenger.update(rest, query)
    if (!ok) {
      return res.status(400).json({
        msg: ok
      })
    }
    return res.json({
      msg: ok
    })
  }
}
