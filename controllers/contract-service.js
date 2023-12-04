import { validateContractService } from '../schemas/contract-service.js'

export default class ContractServiceController {
  constructor(Model) {
    this.Type = Model
  }

  getAll = async (req, res) => {
    const _types = await this.Type.find()
    res.json(_types)
  }

  create = async (req, res) => {
    const body = req.body
    // validate zod attributes
    if (body.valuation === '') {
      body.valuation = null
    }
    const result = validateContractService(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    const type = await this.Type.create(body)
    res.status(201).json({ type })
  }

  delete = async (req, res) => {
    const { service, client, date } = req.query
    const ok = await this.Type.delete({ service, client, date })
    res.json({
      ok
    })
  }

  update = async (req, res) => {
    const { service, client, date } = req.query
    const type = await this.Type.findById({ service, client, date })
    if (typeof type === 'undefined') {
      return res.status(404).json({
        msg: 'type not found'
      })
    }
    // validate zod attributes
    if (req.body.valuation === '') {
      req.body.valuation = null
    }
    const result = validateContractService(req.body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    const ok = await this.Type.update(req.body, { service, client, date })
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
