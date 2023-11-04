import { User } from './definitions/index.js'

export class UserModel {
  static findByID = async (id) => {
    const result = await User.findOne({ where: { id } })
    const { dataValues } = result ?? {}
    return dataValues
  }

  static find = async (attr) => {
    const users = await User.findAll({ where: attr })
    const result = users.map((user) => {
      const { dataValues } = user
      return dataValues
    })
    return result
  }

  static getAll = async () => {
    const users = await this.find()
    return users
  }

  static create = async (user) => {
    const _user = new User(user)
    await _user.save()
    return _user
  }

  static delete = async (id) => {
    const result = await User.destroy({ where: { id } })
    return result !== 0
  }
}
