import WorkShopReparation from '../models/definitions/workshop-reparation.js'

export default class ValuationRepController {
  constructor(Model) {
    this.Type = Model
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const { ship, date, valuation } = req.body
    const query = { ship, startDate: date }
    const aux = await WorkShopReparation.findOne({ where: query })
    if (!aux) {
      return res.status(401).json({
        msg: 'nave y fecha de reparacion incorrecta'
      })
    }
    const body = { ship, date, valuation }
    const type = await this.Type.create(body)
    res.status(201).json({
      type
    })
  }

  delete = async (req, res) => {
    const { ship, date } = req.query
    const ok = await this.Type.delete({ ship, date })
    res.json({
      ok
    })
  }

  update = async (req, res) => {
    const { shipOld, dateOld } = req.query
    const query1 = { ship: shipOld, date: dateOld }
    const type = await this.Type.findById(query1)
    if (typeof type === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    const { ship, date, valuation } = req.body
    const query2 = { ship, startDate: date }
    const aux = await WorkShopReparation.findOne({ where: query2 })
    if (!aux) {
      res.json({
        msg: 'dato no resgistrado en taller'
      })
    }
    const body = { ship, date, valuation }
    const ok = await this.Type.update(body, query1)
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
