import { Router } from 'express'
import ReparationController from '../controllers/reparation.js'

const ReparationRouter = (Reparation, ReparationType) => {
  const router = Router()
  const reparationControl = new ReparationController(Reparation, ReparationType)
  router.get('/', reparationControl.getAll.bind(reparationControl))
  router.post('/', reparationControl.create.bind(reparationControl))
  router.delete('/:id', reparationControl.delete.bind(reparationControl))
  router.put('/:id', reparationControl.update.bind(reparationControl))

  return router
}

export default ReparationRouter
