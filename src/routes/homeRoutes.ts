import { Router } from 'express'
import { tasksGet } from '../controllers/homeController'
import { requireAuth } from '../middleware/authMiddleware'

const router = Router()

router.get('/home', requireAuth, tasksGet)
router.get('/home/:page', requireAuth, tasksGet)

export default router
