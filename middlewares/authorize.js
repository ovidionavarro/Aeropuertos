import { Role } from '../models/index.js'

const authorize = (role) => {
  return async (req, res, next) => {
    const result = await Role.findOne({ where: { roleName: role } })

    const { roleId } = result || {}
    if (req.roleId !== roleId) {
      return res.status(403).send('Forbidden')
    }

    next()
  }
}
export default authorize
