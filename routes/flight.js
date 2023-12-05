import { Router } from 'express'
import FlightController from '../controllers/flight.js'

const FlightRouter = (flight, Ship, AirPort) => {
  const router = Router()
  const flightControl = new FlightController(flight, Ship, AirPort)
  router.get('/', flightControl.getAll.bind(flightControl))
  router.post('/', flightControl.create.bind(flightControl))
  router.delete('/', flightControl.delete.bind(flightControl))
  router.put('/', flightControl.update.bind(flightControl))

  return router
}
export default FlightRouter
