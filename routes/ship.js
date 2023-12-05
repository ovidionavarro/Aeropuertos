import { Router } from 'express'
import ShipController from '../controllers/ship.js'

const ShipRouter = (Ship, Client, Classification) => {
  const router = Router()
  const shipControl = new ShipController(Ship, Client, Classification)
  router.get('/', shipControl.getAll.bind(shipControl))
  router.post('/', shipControl.create.bind(shipControl))
  router.delete('/:id', shipControl.delete.bind(shipControl))
  router.put('/:id', shipControl.update.bind(shipControl))

  return router
}

export default ShipRouter
