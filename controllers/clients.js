import { Client } from '../models/index.js'
import { validateClient } from '../schemas/client.js'

export default class ClientController {
  static getAll = async (req, res) => {
    const clients = await Client.findAll()
    res.json(clients)
  }

  static create = async (req, res) => {
    const result = validateClient(req.body)
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
    const client = new Client(result.data)
    await client.save()
    res.status(201).json({ client })
  }
}
