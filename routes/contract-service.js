import { Router } from 'express'
import ContractServiceController from '../controllers/contract-service.js'

const ContractServiceRouter = (Model) => {
  const router = Router()
  const contractServiceControl = new ContractServiceController(Model)
  router.get('/', contractServiceControl.getAll.bind(contractServiceControl))
  router.post('/', contractServiceControl.create.bind(contractServiceControl))
  router.delete('/', contractServiceControl.delete.bind(contractServiceControl))
  router.put('/', contractServiceControl.update.bind(contractServiceControl))

  return router
}
export default ContractServiceRouter
