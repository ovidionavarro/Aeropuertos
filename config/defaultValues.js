import { getHash } from '../utils.js'
export const defaultRoles = [{ roleName: 'admin' }, { roleName: 'operator' }]
export const defaultTyperPassenger = [{ name: 'captain' }]
const pass = await getHash('admin')
export const defaultAdmin = [{ username: 'admin', passwordHash: pass, roleId: 1 }]
export const roles = { admin: 1, operator: 2 }
