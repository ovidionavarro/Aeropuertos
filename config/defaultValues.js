import { getHash } from '../utils.js'
export const defaultRoles = [{ roleName: 'admin' }]
export const defaultClientType = [{ name: 'pasajero' }]
export const defaultClient = [{ name: 'pedro', nacionality: 'cubano', idTypeClient: 1 }]
export const defaultPassengerType = [{ name: ' captian' }]
export const defaultInstalationType = [{ name: ' mercado ' }]

let pass = ''
try {
  pass = await getHash('admin')
} catch (e) {
  throw new Error(e)
}
export const defaultAdmin = [{ username: 'admin', passwordHash: pass, roleId: 1 }]
