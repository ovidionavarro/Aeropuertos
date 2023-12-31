import { Router } from 'express'
import InstallationController from '../controllers/installation.js'

const InstallationRouter = (Installation, InstallationType, Airport) => {
  const router = Router()
  const installationControl = new InstallationController(Installation, InstallationType, Airport)
  router.get('/', installationControl.getAll.bind(installationControl))
  router.post('/', installationControl.create.bind(installationControl))
  router.delete('/:id', installationControl.delete.bind(installationControl))
  router.put('/:id', installationControl.update.bind(installationControl))

  return router
}

export default InstallationRouter
