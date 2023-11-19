export default class WorkShopController {
  constructor(Model) {
    this.Type = Model
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const body = req.body
    const type = await this.Type.create(body)
    res.status(201).json({ type })
  }

  delete = async (req, res) => {
    const { ship, startDate } = req.query
    const ok = await this.Type.delete({ ship, startDate })
    res.json({
      ok
    })
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
    const ok = await this.Type.update(body, { ship, startDate })
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
