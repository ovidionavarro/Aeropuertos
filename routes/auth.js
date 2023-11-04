import { Router } from 'express'
import AuthController from '../controllers/auth.js'
const AuthRouter = (Model) => {
  const router = new Router()
  const authController = new AuthController(Model)
  router.post('/', authController.login.bind(authController))
  return router
}
export default AuthRouter
