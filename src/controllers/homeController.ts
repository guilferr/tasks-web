import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { TaskModel } from '../models/taskModel'
import { apiErrorHandling } from '../utils/apiErrorHandling'
import { handleDateLocale } from '../utils/handleDateLocale'

export const tasksGet = async (req: Request, res: Response): Promise<void> => {
  const token = req.cookies.jwt

  try {
    const tokenDecoded = jwt.decode(token)

    if (typeof tokenDecoded === 'string' || tokenDecoded === null) {
      throw new Error('Problema no token')
    }

    const page = Object.prototype.hasOwnProperty.call(req.params, 'page') ? (Number(req.params.page) - 1) * 10 : 0

    const { tasks, count } = await new TaskModel().list({
      where: {
        status: {
          id: 1
        }
      },
      skip: page,
      take: 10,
      order: {
        openingDate: {
          direction: 'asc'
        },
        id: {
          direction: 'asc'
        }
      }
    })

    const tasksFormatted: any = []

    for (const task of tasks) {
      tasksFormatted.push({
        id: task.id,
        title: task.title,
        type: task.type_task.description,
        priority: task.priority.description,
        openingDate: handleDateLocale(task.openingDate),
        user: task.responsibleUser.login,
        isUserLoggedIn: task.responsibleUser.login === tokenDecoded.username
      })
    }

    res.render('home', {
      tasks: tasksFormatted,
      count,
      page: Object.prototype.hasOwnProperty.call(req.params, 'page') ? Number(req.params.page) : 1
    })
  } catch (error) {
    const errors = apiErrorHandling(error)
    res.render('home', {
      errors
    })
  }
}
