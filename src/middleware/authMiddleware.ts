import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/userModel'

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, process.env.TOKEN_KEY as string, (err: any, decodedToken: any) => {
      if (err) {
        res.redirect('/login')
      } else {
        next()
      }
    })
  } else {
    res.redirect('/login')
  }
}

export const checkUser = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(token, process.env.TOKEN_KEY as string, async (err: any, decodedToken: any) => {
      if (err) {
        res.locals.user = null
        next()
      } else {
        const user = await new UserModel().get(decodedToken.id)
        res.locals.user = user
        next()
      }
    })
  } else {
    res.locals.user = null
    next()
  }
}
