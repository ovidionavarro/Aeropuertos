import { validateClient } from '../schemas/client.js'
import { getHash } from '../utils.js'

export default class ClientController {
  constructor(Model) {
    this.ClientModel = Model
  }

  getAll = async (req, res) => {
    const clients = await this.ClientModel.find()
    const _clients = clients.map((c) => {
      const { passwordHash, ..._client } = c
      return _client
    })
    res.json(_clients)
  }

  create = async (req, res) => {
    const body = req.body
    const result = validateClient(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    const { password } = body
    body.passwordHash = await getHash(password)
    try {
      const client = await this.ClientModel.create(body)
      const { passwordHash, ..._client } = client
      res.status(201).json({ _client })
    } catch (error) {
      const msg = error.errors[0].message
      return res.status(409).json({
        msg
      })
    }
  }

  delete = async (req, res) => {
    const { id } = req.params
    const ok = await this.ClientModel.delete({ id })
    res.json({
      ok
    })
  }

  update = async (req, res) => {
    const { id } = req.params
    const user = await this.ClientModel.findById({ id })
    if (typeof user === 'undefined') {
      return res.status(404).json({
        msg: 'client not found'
      })
    }
    const body = req.body
    const result = validateClient(body)
    const { Ok, msg } = result
    if (!Ok) {
      return res.status(422).json({
        msg
      })
    }
    const { password } = body
    if (typeof password !== 'undefined') {
      body.passwordHash = await getHash(password)
    }
    try {
      const ok = await this.ClientModel.update(body, { id })
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
