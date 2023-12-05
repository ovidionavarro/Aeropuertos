import { validatePassenger } from '../schemas/passenger.js'

export default class PassengerController {
  constructor(Passenger, Flight, Client, PassengerType) {
    this.Passenger = Passenger
    this.Flight = Flight
    this.Client = Client
    this.PassengerType = PassengerType
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
    const { ship, date, idClient, idPassengerType } = body
    const fl = { ship, date }
    const dataValues = await this.Flight.find(fl)
    if (dataValues.length === 0) {
      return res.status(401).json({
        msg: 'no existe ese vuelo'
      })
    }
    const dataClient = await this.Client.findById({ id: idClient })
    if (!dataClient) {
      return res.status(401).json({
        msg: 'client not found'
      })
    }

    const dataPassengerType = await this.PassengerType.findById({ id: idPassengerType })
    if (!dataPassengerType) {
      return res.status(401).json({
        msg: 'passenger type not found'
      })
    }

    try {
      const type = await this.Passenger.create(body)
      res.status(201).json({
        type
      })
    } catch (error) {
      const msg = error.errors[0].message
      return res.status(409).json({
        msg
      })
    }
  }

  delete = async (req, res) => {
    const { shipOld, dateOld, idClientOld } = req.query
    const query = {
      ship: shipOld,
      date: dateOld,
      idClient: idClientOld
    }
    try {
      const ok = await this.Passenger.delete(query)
      res.json({
        ok
      })
    } catch (error) {
      res.status(409).json({
        msg: 'cannot delete, foreing key '
      })
    }
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
    // validando foraneas
    const { ship, date, idClient, idPassengerType } = body
    const query2 = { ship, date }
    const dataValues = await this.Flight.find(query2)
    if (dataValues === 0) {
      return res.status(401).json({
        msg: 'no existe ese vuelo'
      })
    }
    const dataClient = await this.Client.findById({ id: idClient })
    if (!dataClient) {
      return res.status(401).json({
        msg: 'client not found'
      })
    }

    const dataPassengerType = await this.PassengerType.findById({ id: idPassengerType })
    if (!dataPassengerType) {
      return res.status(401).json({
        msg: 'passenger type not found'
      })
    }
    try {
      const ok = await this.Passenger.update(body, query)
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
