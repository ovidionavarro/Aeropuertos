import { Router } from 'express'
import GenericController from '../controllers/generic-controller.js'

const GenericRouter = (Model) => {
  const router = Router()
  const genericControl = new GenericController(Model)
  router.get('/', genericControl.getAll.bind(genericControl))
  router.post('/', genericControl.create.bind(genericControl))
  router.delete('/:id', genericControl.delete.bind(genericControl))
  router.put('/:id', genericControl.update.bind(genericControl))

  return router
}

export default GenericRouter
