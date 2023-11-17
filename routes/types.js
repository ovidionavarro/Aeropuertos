import { Router } from 'express'
import ControllerType from '../controllers/controller-type.js'

const RouterTypes = (Model) => {
  const router = Router()
  const controlType = new ControllerType(Model)
  router.get('/', controlType.getAll.bind(controlType))
  router.post('/', controlType.create.bind(controlType))
  router.delete('/:id', controlType.delete.bind(controlType))
  router.put('/:id', controlType.update.bind(controlType))

  return router
}

export default RouterTypes
