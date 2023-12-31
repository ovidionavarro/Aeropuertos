import { validateValuateReparation } from '../schemas/valuate-reparation.js'

export default class ValuationRepController {
  constructor(Valuation, WorkshopReparation) {
    this.Valuation = Valuation
    this.WorkShopReparation = WorkshopReparation
  }

  getAll = async (req, res) => {
    const _types = await this.Valuation.find()
    res.json(_types)
  }

  create = async (req, res) => {
    if (req.body.valuation === '') {
      req.body.valuation = null
    }
    const { ship, date, valuation } = req.body
    // validando atributos zod

    const result = validateValuateReparation({ ship, date, valuation })
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }

    const query = { ship, startDate: date }
    const aux = await this.WorkShopReparation.find(query)

    if (aux.length === 0) {
      return res.status(401).json({
        msg: 'reparation not found'
      })
    }
    const body = { ship, date, valuation }
    try {
      const val = await this.Valuation.create(body)
      res.status(201).json({
        val
      })
    } catch (error) {
      const msg = error.errors[0].message
      return res.status(409).json({
        msg
      })
    }
  }

  delete = async (req, res) => {
    const { ship, date } = req.query
    try {
      const ok = await this.Valuation.delete({ ship, date })
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
    const { shipOld, dateOld } = req.query
    const query1 = { ship: shipOld, date: dateOld }
    const val = await this.Valuation.findById(query1)
    if (typeof val === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    const { ship, date, valuation } = req.body
    // validando atributos con zod
    const result = validateValuateReparation({ ship, date, valuation })
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    const query2 = { ship, startDate: date }
    const aux = await this.WorkShopReparation.find(query2)
    if (aux === 0) {
      res.json({
        msg: 'reparation not found'
      })
    }
    const body = { ship, date, valuation }
    try {
      const ok = await this.Valuation.update(body, query1)
      if (!ok) {
        return res.status(400).json({
          msg: ok
        })
      }
      return res.json({
        msg: ok
      })
    } catch (error) {
      return res.status(409).json({
        msg
      })
    }
  }
}
