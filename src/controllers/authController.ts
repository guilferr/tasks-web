import bcrypt from 'bcryptjs'
import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/userModel'
import { apiErrorHandling } from '../utils/apiErrorHandling'

const maxAge = 3 * 24 * 60 * 60
const createToken = (id: number, username: string): string => {
  return jwt.sign({ id, username }, process.env.TOKEN_KEY as string, {
    expiresIn: maxAge
  })
}

export const signupGet = (req: Request, res: Response): void => {
  res.render('register')
}

export const loginGet = (req: Request, res: Response): void => {
  res.render('login')
}

export const signupPost = async (req: Request, res: Response): Promise<void> => {
  const { login, password, confirm } = req.body

  try {
    if (password !== confirm) {
      throw new Error('Senhas não coincidem')
    }
    if (password.length < 8) {
      throw new Error('Senha muito curta')
    }
    if (login.length < 5) {
      throw new Error('Nome de usuário muito curto')
    }
    const userExists = await new UserModel().list({
      login
    })
    if (userExists.length > 0) {
      throw new Error('Esse usuário já existe')
    }
    const user = await new UserModel().create(login, password)
    const token = createToken(user.id, user.login)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.render('register', {
      user: {
        id: user.id,
        login: user.login
      }
    })
  } catch (err) {
    const errors = apiErrorHandling(err)
    res.render('register', {
      errors
    })
  }
}

export const loginPost = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body

  try {
    const users = await new UserModel().list({
      login: username
    })
    if (users.length === 0) {
      throw new Error('Usuário não encontrado')
    }

    const hashPass = await bcrypt.hash(password, users[0].salt)
    const auth = users[0].password === hashPass

    if (!auth) {
      throw new Error('Usuário ou senha incorreto')
    }
    const token = createToken(users[0].id, users[0].login)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.redirect('/home')
  } catch (err) {
    const errors = apiErrorHandling(err)
    res.render('login', {
      errors
    })
  }
}

export const logoutGet = (req: Request, res: Response): void => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/login')
}
