import { Router } from 'express'
import AuthController from '../controllers/auth.js'
const router = new Router()
router.post('/', AuthController.login)
export default router
