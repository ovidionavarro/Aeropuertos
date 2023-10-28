import { User } from '../models/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export default class AdminAuthController {
  static login = async (req, res) => {
    const { body } = req
    const { username, password } = body
    const user = await User.findOne({ where: { username } })
    const correctPass = (user === null) ? false : await bcrypt.compare(password, user.passwordHash)
    if (!correctPass) {
      return res.status(401).json({ error: 'Usuario o Contraseña incorrecto' })
    }
    const { id, roleId } = user
    const tokeninfo = {
      id,
      roleId
    }
    const token = jwt.sign(tokeninfo, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 }
    )
    res.json({ username: user.username, token })
  }
}
