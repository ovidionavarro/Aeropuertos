import { validateService } from '../schemas/service.js'

export default class ServiceController {
  constructor(Service, Installation) {
    this.Type = Service
    this.Installation = Installation
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find({ activity: true })
    res.json(_types)
  }

  create = async (req, res) => {
    const body = req.body
    const result = validateService(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    // valindando foraneas
    const installation = body.idInstalation
    const dataInst = await this.Installation.findById({ id: installation })
    if (!dataInst) {
      return res.status(401).json({
        msg: 'installation not found'
      })
    }
    const type = await this.Type.create(body)
    res.status(201).json({ type })
  }

  delete = async (req, res) => {
    const { id } = req.params
    const elem = await this.Type.findById({ id })
    elem.activity = false
    const { description, price, idInstalation, activity } = elem
    const body = { description, price, idInstalation, activity }
    const ok = await this.Type.update(body, { id })
    res.json({
      msg: ok
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
    const result = validateService(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    // valindando foraneas
    const installation = body.idInstalation
    const dataInst = await this.Installation.findById({ id: installation })
    if (!dataInst) {
      return res.status(401).json({
        msg: 'installation not found'
      })
    }
    const ok = await this.Type.update(body, { id })
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
