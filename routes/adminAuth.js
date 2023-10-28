import { Router } from 'express'
import AdminAuthController from '../controllers/adminAuth.js'
const router = new Router()
router.post('/', AdminAuthController.login)
export default router
