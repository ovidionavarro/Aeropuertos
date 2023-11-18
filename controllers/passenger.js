import Flight from '../models/definitions/flight.js'

export default class PassengerController {
  constructor(Model) {
    this.Type = Model
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const { ship, date, ...rest } = req.body
    const body = { ship, date }
    const dataValues = await Flight.findOne({ where: body })
    if (!dataValues) {
      return res.status(401).json({
        msg: 'no existe ese vuelo'
      })
    }
    rest.ship = ship
    rest.date = date
    const type = await this.Type.create(rest)
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
    const ok = await this.Type.delete(query)
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
    const type = await this.Type.findById(query)
    if (typeof type === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    const { ship, date, ...body } = req.body
    const query2 = { ship, date }
    const dataValues = await Flight.findOne({ where: query2 })
    if (!dataValues) {
      return res.status(401).json({
        msg: 'no existe ese vuelo'
      })
    }
    body.ship = ship
    body.date = date
    const ok = await this.Type.update(body, query)
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
