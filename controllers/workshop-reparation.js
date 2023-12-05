import { validateWorkshop } from '../schemas/workshop-reparation.js'

export default class WorkShopController {
  constructor(WorkShop, Ship, Reparation) {
    this.Type = WorkShop
    this.Ship = Ship
    this.Reparation = Reparation
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const body = req.body
    // validando atributos zod
    const result = validateWorkshop(body)
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
        msg: 'ship  not found'
      })
    }
    const reparation = body.idReparation
    const dataReparation = await this.Reparation.findById({ id: reparation })
    if (!dataReparation) {
      return res.status(401).json({
        msg: 'ship  not found'
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
    const { ship, startDate } = req.query

    try {
      const ok = await this.Type.delete({ ship, startDate })
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
    const { ship, startDate } = req.query
    const type = await this.Type.findById({ ship, startDate })
    if (typeof type === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    const body = req.body
    const result = validateWorkshop(body)
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
        msg: 'ship  not found'
      })
    }
    const reparation = body.idReparation
    const dataReparation = await this.Reparation.findById({ id: reparation })
    if (!dataReparation) {
      return res.status(401).json({
        msg: 'ship  not found'
      })
    }
    try {
      const ok = await this.Type.update(body, { ship, startDate })
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
