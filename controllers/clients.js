import { validateClient } from '../schemas/client.js'

export default class ClientController {
  constructor(Model) {
    this.ClientModel = Model
  }

  getAll = async (req, res) => {
    const clients = await this.ClientModel.find()
    res.json(clients)
  }

  create = async (req, res) => {
    // const result = validateClient(req.body)

    /* if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    } */
    console.log(req.body)
    const client = await this.ClientModel.create(req.body)

    res.status(201).json({ client })
  }
}
