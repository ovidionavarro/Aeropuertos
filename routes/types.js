import { Router } from 'express'
import TypeController from '../controllers/type.js'

const TypeRouter = (Model) => {
  const router = Router()
  const typeClientControl = new TypeController(Model)
  router.get('/', typeClientControl.getAll.bind(typeClientControl))
  router.post('/', typeClientControl.create.bind(typeClientControl))
  router.delete('/:id', typeClientControl.delete.bind(typeClientControl))
  router.put('/:id', typeClientControl.update.bind(typeClientControl))

  return router
}

export default TypeRouter
