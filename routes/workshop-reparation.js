import { Router } from 'express'
import WorkShopController from '../controllers/workshop-reparation.js'
const WorkShopRouter = (WorkShop, Ship, Reparation) => {
  const router = Router()
  const workshopControl = new WorkShopController(WorkShop, Ship, Reparation)
  router.get('/', workshopControl.getAll.bind(workshopControl))
  router.post('/', workshopControl.create.bind(workshopControl))
  router.delete('/', workshopControl.delete.bind(workshopControl))
  router.put('/', workshopControl.update.bind(workshopControl))
  return router
}
export default WorkShopRouter
