import { Router } from 'express'
import { taskInsertGet, taskInsertPost } from '../controllers/taskInsertController'
import { requireAuth } from '../middleware/authMiddleware'

const router = Router()

router.get('/task', requireAuth, taskInsertGet)
router.post('/task', requireAuth, taskInsertPost)

export default router
