import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export default class AdminAuthController {
  constructor(Model) {
    this.UserModel = Model
  }

  login = async (req, res) => {
    const { body } = req
    const { username, password } = body
    const [user] = await this.UserModel.find({ username })
    const correctPass = user === null ? false : await bcrypt.compare(password, user.passwordHash)
    if (!correctPass) {
      return res.status(401).json({ error: 'incorrect username or password' })
    }
    const { id, roleId } = user
    const tokeninfo = {
      id,
      roleId
    }
    const token = jwt.sign(tokeninfo, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 })
    res.json({ username: user.username, token })
  }
}
