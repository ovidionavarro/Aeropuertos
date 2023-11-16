class ModelConstructor {
  constructor(model) {
    this.Model = model
  }

  findById = async (id) => {
    const result = await this.Model.findOne({ where: id })
    const { dataValues } = result ?? {}
    return dataValues
  }

  find = async (attr) => {
    const result = await this.Model.findAll({ where: attr })
    const _result = result.map((r) => {
      const { dataValues } = r
      return dataValues
    })
    return _result
  }

  getAll = async () => {
    const result = await this.find()
    return result
  }

  create = async (data) => {
    const result = new this.Model(data)
    await result.save()
    return result
  }

  delete = async (id) => {
    const result = await this.Model.destroy({ where: id })
    return result !== 0
  }

  update = async (attr, id) => {
    const result = await this.Model.update(attr, { where: id })
    const [ok] = result
    return !!ok
  }
}
export default ModelConstructor
