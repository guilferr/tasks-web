import { Router } from 'express'
import { loginGet, loginPost, logoutGet, signupGet, signupPost } from '../controllers/authController'

const router = Router()

router.get('/signup', signupGet)
router.post('/signup', signupPost)
router.get('/login', loginGet)
router.post('/login', loginPost)
router.get('/logout', logoutGet)

export default router
