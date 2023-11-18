import { fecha } from '../utils.js'

export default class FlightController {
  constructor(Model) {
    this.Type = Model
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const { day1, month1, year1, day2, month2, year2, ...body } = req.body
    const dateReal = fecha(day1, month1, year1)
    const dateEsp = fecha(day2, month2, year2)
    body.date = dateReal
    body.plannedDate = dateEsp
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
    const { day1, month1, year1, day2, month2, year2, ...body } = req.body
    const dateReal = fecha(day1, month1, year1)
    const dateEsp = fecha(day2, month2, year2)
    body.date = dateReal
    body.plannedDate = dateEsp
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
