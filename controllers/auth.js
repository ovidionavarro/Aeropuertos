import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export default class AuthController {
  constructor(Model) {
    this.ClientModel = Model
  }

  login = async (req, res) => {
    const { body } = req
    const { username, password } = body
    const [client] = await this.ClientModel.find({ username })
    const correctPass =
      typeof client === 'undefined' ? false : await bcrypt.compare(password, client.passwordHash)
    if (!correctPass) {
      return res.status(401).json({ error: 'incorrect username or password' })
    }
    const { id } = client
    const tokeninfo = {
      id,
      username
    }
    const token = jwt.sign(tokeninfo, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 })
    res.json({ id, username, token })
  }
}
