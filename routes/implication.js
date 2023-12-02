import { Router } from 'express'
import ImplicationController from '../controllers/implicacion.js'

const ImplicationRouter = (Implication, WorkShopReparation) => {
  const router = Router()
  const implicationControl = new ImplicationController(Implication, WorkShopReparation)
  router.get('/', implicationControl.getAll.bind(implicationControl))
  router.post('/', implicationControl.create.bind(implicationControl))
  router.delete('/', implicationControl.delete.bind(implicationControl))
  router.put('/', implicationControl.update.bind(implicationControl))
  return router
}
export default ImplicationRouter
