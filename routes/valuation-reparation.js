import { Router } from 'express'
import ValuationRepController from '../controllers/valuation-reparation.js'

const ValuationRepRouter = (Model) => {
  const router = Router()
  const valuationControl = new ValuationRepController(Model)
  router.get('/', valuationControl.getAll.bind(valuationControl))
  router.post('/', valuationControl.create.bind(valuationControl))
  router.delete('/', valuationControl.delete.bind(valuationControl))
  router.put('/', valuationControl.update.bind(valuationControl))
  return router
}
export default ValuationRepRouter
