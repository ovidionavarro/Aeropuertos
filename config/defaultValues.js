import { getHash } from '../utils.js'
export const defaultRoles = [{ roleName: 'admin' }]

let pass = ''
try {
  pass = await getHash('admin')
} catch (e) {
  throw new Error(e)
}
export const defaultAdmin = [{ username: 'admin', passwordHash: pass, roleId: 1 }]
