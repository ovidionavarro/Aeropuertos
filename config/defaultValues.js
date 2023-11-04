import { getHash } from '../utils.js'
export const defaultRoles = [{ roleName: 'admin' }]
export const defaultTipoCliente = [{ tipoName: 'pasajero' }]
export const defaultCliente = [{ name: 'pedro', nacionalidad: 'cubano', tipoClient: 1 }]
let pass = ''
try {
  pass = await getHash('admin')
} catch (e) {
  throw new Error(e)
}
export const defaultAdmin = [{ username: 'admin', passwordHash: pass, roleId: 1 }]
