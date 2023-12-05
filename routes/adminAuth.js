import { Router } from 'express'
import AdminAuthController from '../controllers/adminAuth.js'
const AdminAuthRouter = (Model) => {
  const router = new Router()
  const adminAuthController = new AdminAuthController(Model)
  router.post('/', adminAuthController.login.bind(adminAuthController))
  return router
}
export default AdminAuthRouter
