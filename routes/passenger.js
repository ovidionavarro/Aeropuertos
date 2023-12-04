import { Router } from 'express'
import PassengerController from '../controllers/passenger.js'

const PassengerRouter = (Passenger, Flight, Client, PassengerType) => {
  const router = Router()
  const passengerControl = new PassengerController(Passenger, Flight, Client, PassengerType)
  router.get('/', passengerControl.getAll.bind(passengerControl))
  router.post('/', passengerControl.create.bind(passengerControl))
  router.delete('/', passengerControl.delete.bind(passengerControl))
  router.put('/', passengerControl.update.bind(passengerControl))

  return router
}

export default PassengerRouter
