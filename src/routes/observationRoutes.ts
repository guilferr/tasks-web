import { Router } from 'express'
import { observationEditPost, observationPost } from '../controllers/observationController'
import { requireAuth } from '../middleware/authMiddleware'

const router = Router()

router.post('/observation/task/:taskId', requireAuth, observationPost)
router.post('/observation/task/:taskId/edit', requireAuth, observationEditPost)

export default router
