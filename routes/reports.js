import { Router } from 'express'
import ReportsController from '../controllers/reports.js'
// import authenticate from '../middlewares/authenticate.js'
// import authorize from '../middlewares/authorize.js'
// import { roles } from '../config/defaultValues.js'

const ReportsRouter = (Model) => {
  const router = Router()
  // router.use(authenticate)
  // router.use(authorize(roles.admin))
  const reportController = new ReportsController(Model)
  router.get('/', reportController.get.bind(reportController))
  return router
}
export default ReportsRouter
