import { Client } from './definitions/index.js'

export class ClientModel {
  static findByID = async (id) => {
    const result = await Client.findOne({ where: { id } })
    const { dataValues } = result ?? {}
    return dataValues
  }

  static find = async (attr) => {
    const clients = await Client.findAll({ where: attr })
    const result = clients.map((client) => {
      const { dataValues } = client
      return dataValues
    })
    return result
  }

  static getAll = async () => {
    const clients = await this.find()
    return clients
  }

  static create = async (user) => {
    const _user = new Client(user)
    await _user.save()
    return _user
  }

  static delete = async (id) => {
    const result = await Client.destroy({ where: { id } })
    return result !== 0
  }

  static update = async (attr, id) => {
    const result = await Client.update(attr, { where: { id } })
    const [ok] = result
    return !!ok
  }
}
