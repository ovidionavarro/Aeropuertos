import { validateFlight } from '../schemas/flight.js'

export default class FlightController {
  constructor(flight, Ship, AirPort) {
    this.Type = flight
    this.Ship = Ship
    this.AirPort = AirPort
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const body = req.body
    // validando atributos zod
    const result = validateFlight(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    // validando foraneas
    const ship = body.ship
    const dataShip = await this.Ship.findById({ id: ship })
    if (!dataShip) {
      return res.status(401).json({
        msg: 'ship not found'
      })
    }
    const airport = body.airport
    const dataAirPort = await this.AirPort.findById({ id: airport })
    if (!dataAirPort) {
      return res.status(401).json({
        msg: 'airport not found'
      })
    }
    try {
      const type = await this.Type.create(body)
      res.status(201).json({ type })
    } catch (error) {
      const msg = error.errors[0].message
      return res.status(409).json({
        msg
      })
    }
  }

  delete = async (req, res) => {
    const { ship, date } = req.query
    const ok = await this.Type.delete({ ship, date })
    res.json({
      ok
    })
  }

  update = async (req, res) => {
    const { ship, date } = req.query
    const type = await this.Type.findById({ ship, date })
    if (typeof type === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    // validando atributos zod
    const body = req.body
    const result = validateFlight(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    // validando foraneas
    const auxShip = body.ship
    const dataShip = await this.Ship.findById({ id: auxShip })
    if (!dataShip) {
      return res.status(401).json({
        msg: 'ship not found'
      })
    }
    const airport = body.airport
    const dataAirPort = await this.AirPort.findById({ id: airport })
    if (!dataAirPort) {
      return res.status(401).json({
        msg: 'airport not found'
      })
    }

    try {
      const ok = await this.Type.update(body, { ship, date })
      if (!ok) {
        return res.status(400).json({
          msg: ok
        })
      }
      return res.json({
        msg: ok
      })
    } catch (error) {
      const msg = error.errors[0].message
      return res.status(409).json({
        msg
      })
    }
  }
}
