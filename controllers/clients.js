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
    const { name, nationality, idClientType, passwordHash, username } = req.body
    const ok = await this.ClientModel.update(
      { name, nationality, idClientType, passwordHash, username },
      id
    )
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
