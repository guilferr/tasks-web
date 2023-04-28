import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { PriorityModel } from '../models/priorityModel'
import { TaskModel } from '../models/taskModel'
import { TypeModel } from '../models/typeModels'
import { apiErrorHandling } from '../utils/apiErrorHandling'

export const taskInsertGet = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasktypes = await new TypeModel().list({})
    const priorities = await new PriorityModel().list({})
    res.render('insert', {
      types: tasktypes,
      priorities
    })
  } catch (error) {
    const errors = apiErrorHandling(error)
    res.render('insert', {
      errors
    })
  }
}

export const taskInsertPost = async (req: Request, res: Response): Promise<void> => {
  const token = req.cookies.jwt
  const { title, type, priority, description } = req.body
  const tokenDecoded = jwt.decode(token)

  try {
    if (Number.isNaN(Number(type))) {
      throw new Error('Escolha um tipo válido')
    }
    if (Number.isNaN(Number(priority))) {
      throw new Error('Escolha uma prioridade válida')
    }
    if (title.length < 10) {
      throw new Error('Título muito curto')
    }
    if (description.length < 10) {
      throw new Error('Descrição muito curta')
    }
    if (typeof tokenDecoded === 'string' || tokenDecoded === null) {
      throw new Error('Problema no token')
    }

    await new TaskModel().create({
      title,
      description,
      priority: Number(priority),
      type: Number(type),
      user: tokenDecoded.id
    })

    res.redirect('/home')
  } catch (err) {
    const errors = apiErrorHandling(err)
    res.render('insert', {
      errors
    })
  }
}
