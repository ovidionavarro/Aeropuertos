import { validateAirPort } from '../schemas/airport.js'

export default class AirPortController {
  constructor(Model) {
    this.Type = Model
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const body = req.body
    // validation
    const result = validateAirPort(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
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
    const { id } = req.params
    try {
      const ok = await this.Type.delete({ id })
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
    const { id } = req.params
    const type = await this.Type.findById({ id })
    if (typeof type === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    const body = req.body
    // validation
    const result = validateAirPort(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    // validate unique

    try {
      const ok = await this.Type.update(body, { id })
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
