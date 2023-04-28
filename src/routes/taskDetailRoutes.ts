import { Router } from 'express'
import { taskAssumePost, taskDetailGet, taskFinalizePost } from '../controllers/taskDetailController'
import { requireAuth } from '../middleware/authMiddleware'

const router = Router()

router.get('/task/:taskId', requireAuth, taskDetailGet)
router.post('/task/:taskId/assume', requireAuth, taskAssumePost)
router.post('/task/:taskId/finalize', requireAuth, taskFinalizePost)

export default router
