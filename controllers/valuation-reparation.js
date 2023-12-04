import { validateValuateReparation } from '../schemas/valuate-reparation.js'

export default class ValuationRepController {
  constructor(Valuation, WorkshopReparation) {
    this.Valuation = Valuation
    this.WorkShopReparation = WorkshopReparation
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
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
    if (!aux) {
      return res.status(401).json({
        msg: 'nave y fecha de reparacion incorrecta'
      })
    }
    const body = { ship, date, valuation }
    const val = await this.Valuation.create(body)
    res.status(201).json({
      val
    })
  }

  delete = async (req, res) => {
    const { ship, date } = req.query
    const ok = await this.Valuation.delete({ ship, date })
    res.json({
      ok
    })
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
    if (!aux) {
      res.json({
        msg: 'dato no resgistrado en taller'
      })
    }
    const body = { ship, date, valuation }
    const ok = await this.Valuation.update(body, query1)
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
