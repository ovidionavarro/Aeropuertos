import { Router } from 'express'
import ImplicationController from '../controllers/implicacion.js'

const ImplicationRouter = (Model) => {
  const router = Router()
  const implicationControl = new ImplicationController(Model)
  router.get('/', implicationControl.getAll.bind(implicationControl))
  router.post('/', implicationControl.create.bind(implicationControl))
  router.delete('/', implicationControl.delete.bind(implicationControl))
  router.put('/', implicationControl.update.bind(implicationControl))
  return router
}
export default ImplicationRouter
