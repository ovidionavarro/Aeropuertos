import { Router } from 'express'
import PassengerController from '../controllers/passenger.js'

const PassengerRouter = (Model) => {
  const router = Router()
  const passengerControl = new PassengerController(Model)
  router.get('/', passengerControl.getAll.bind(passengerControl))
  router.post('/', passengerControl.create.bind(passengerControl))
  router.delete('/', passengerControl.delete.bind(passengerControl))
  router.put('/', passengerControl.update.bind(passengerControl))

  return router
}

export default PassengerRouter
