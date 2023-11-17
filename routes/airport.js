import { Router } from 'express'
import AirPortController from '../controllers/airport.js'

const AirPortRouter = (Model) => {
  const router = Router()
  const airportControl = new AirPortController(Model)
  router.get('/', airportControl.getAll.bind(airportControl))
  router.post('/', airportControl.create.bind(airportControl))
  router.delete('/:id', airportControl.delete.bind(airportControl))
  router.put('/:id', airportControl.update.bind(airportControl))

  return router
}

export default AirPortRouter
