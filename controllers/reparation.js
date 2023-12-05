import { validateReparation } from '../schemas/reparation.js'

export default class ReparationController {
  constructor(Reparation, ReparationType) {
    this.Type = Reparation
    this.ReparationType = ReparationType
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const body = req.body
    // validando atributos zod
    const result = validateReparation(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    const reparationType = body.idReparationType
    const dataReparationType = await this.ReparationType.findById({ id: reparationType })
    if (!dataReparationType) {
      return res.status(401).json({
        msg: 'reparation type not found'
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
    const ok = await this.Type.delete({ id })
    res.json({
      ok
    })
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
    // validando atributos zod
    const result = validateReparation(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    // validando foranea
    const reparationType = body.idReparationType
    const dataReparationType = await this.ReparationType.findById({ id: reparationType })
    if (!dataReparationType) {
      return res.status(401).json({
        msg: 'reparation type not found'
      })
    }
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
