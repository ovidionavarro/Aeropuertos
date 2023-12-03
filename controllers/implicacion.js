import { validateImplication } from '../schemas/implication.js'

export default class ImplicationController {
  constructor(Implication, WorkshopReparation) {
    this.Implication = Implication
    this.WorkShopReparation = WorkshopReparation
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const { ship1, startDate1, ship2, startDate2 } = req.body
    const result = validateImplication({ ship1, startDate1, ship2, startDate2 })
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    const query1 = { ship: ship1, startDate: startDate1 }
    const query2 = { ship: ship2, startDate: startDate2 }
    const rep1 = await this.WorkShopReparation.find(query1)
    if (!rep1) {
      return res.status(401).json({
        msg: 'nave1 y fecha1 de reparacion incorrecta'
      })
    }
    const rep2 = await this.WorkShopReparation.find(query2)
    if (!rep2) {
      return res.status(401).json({
        msg: 'nave2 y fecha2 de reparacion incorrecta'
      })
    }
    const body = { ship1, startDate1, ship2, startDate2 }
    const type = await this.Implication.create(body)
    res.status(201).json({
      type
    })
  }

  delete = async (req, res) => {
    const { ship1, startDate1, ship2, startDate2 } = req.query
    const query = { ship1, startDate1, ship2, startDate2 }
    const ok = await this.Implication.delete(query)
    res.json({
      ok
    })
  }

  update = async (req, res) => {
    const { ship1Old, startDate1Old, ship2Old, startDate2Old } = req.query
    const query = {
      ship1: ship1Old,
      startDate1: startDate1Old,
      ship2: ship2Old,
      startDate2: startDate2Old
    }
    const type = await this.Implication.findById(query)
    if (typeof type === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    const { ship1, startDate1, ship2, startDate2 } = req.body
    const result = validateImplication({ ship1, startDate1, ship2, startDate2 })
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    const query1 = { ship: ship1, startDate: startDate1 }
    const query2 = { ship: ship2, startDate: startDate2 }
    const rep1 = await this.WorkShopReparation.find(query1)
    if (!rep1) {
      return res.status(401).json({
        msg: 'nave1 y fecha1 de reparacion incorrecta'
      })
    }
    const rep2 = await this.WorkShopReparation.find(query2)
    if (!rep2) {
      return res.status(401).json({
        msg: 'nave2 y fecha2 de reparacion incorrecta'
      })
    }
    const body = { ship1, startDate1, ship2, startDate2 }
    const ok = await this.Implication.update(body, query)
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
