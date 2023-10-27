import { Client } from '../models/index.js'

export default class ClientController {
  static getAll = async (req, res) => {
    const clients = await Client.findAll()
    res.json(clients)
  }

  static create = async (req, res) => {
    const { body } = req
    const client = new Client(body)
    await client.save()
    res.json({ client })
  }
}
