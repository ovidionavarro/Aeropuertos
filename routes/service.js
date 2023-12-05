import { Router } from 'express'
import ServiceController from '../controllers/service.js'

const ServiceRouter = (Service, Installation) => {
  const router = Router()
  const serviceControl = new ServiceController(Service, Installation)
  router.get('/', serviceControl.getAll.bind(serviceControl))
  router.post('/', serviceControl.create.bind(serviceControl))
  router.delete('/:id', serviceControl.delete.bind(serviceControl))
  router.put('/:id', serviceControl.update.bind(serviceControl))

  return router
}

export default ServiceRouter
