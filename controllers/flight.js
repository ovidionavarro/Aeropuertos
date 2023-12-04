import { validateFlight } from '../schemas/flight.js'

export default class FlightController {
  constructor(Model) {
    this.Type = Model
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
    const type = await this.Type.create(body)
    res.status(201).json({ type })
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
    const ok = await this.Type.update(body, { ship, date })
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
