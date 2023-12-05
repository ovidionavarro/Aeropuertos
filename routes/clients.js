import { Router } from 'express'
import ClientController from '../controllers/clients.js'
// import authenticate from '../middlewares/authenticate.js'
// import authorize from '../middlewares/authorize.js'
// import { roles } from '../config/defaultValues.js'

const ClientRouter = (Client, ClientType) => {
  const router = Router()
  const clientController = new ClientController(Client, ClientType)
  // router.use(authenticate)
  // router.use(authorize(roles.admin))
  router.get('/', clientController.getAll.bind(clientController))
  router.post('/', clientController.create.bind(clientController))
  router.delete('/:id', clientController.delete.bind(clientController))
  router.put('/:id', clientController.update.bind(clientController))
  return router
}
export default ClientRouter
