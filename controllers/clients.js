import bcryptjs from 'bcryptjs'
import { getHash } from '../utils.js'

export default class ClientController {
  constructor(Model) {
    this.ClientModel = Model
  }

  getAll = async (req, res) => {
    const clients = await this.ClientModel.find()
    res.json(clients)
  }

  create = async (req, res) => {
    const body = req.body
    const { password } = body
    body.passwordHash = await getHash(password)

    const client = await this.ClientModel.create(body)

    res.status(201).json({ client })
  }

  delete = async (req, res) => {
    const { id } = req.params
    const ok = await this.ClientModel.delete(id)
    res.json({
      ok
    })
  }

  update = async (req, res) => {
    const { id } = req.params
    const user = await this.ClientModel.findByID(id)
    if (typeof user === 'undefined') {
      return res.status(404).json({
        msg: 'client not found'
      })
    }
    const body = req.body
    const salt = bcryptjs.genSaltSync()
    body.passwordHash = bcryptjs.hashSync(body.passwordHash, salt)
    const ok = await this.ClientModel.update(body, id)
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
