import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { ObservationModel } from '../models/observationModel'
import { TaskModel } from '../models/taskModel'
import { apiErrorHandling } from '../utils/apiErrorHandling'
import { handleDateLocale } from '../utils/handleDateLocale'
import { handleDateTime } from '../utils/handleDateTime'

export const taskDetailGet = async (req: Request, res: Response): Promise<void> => {
  const taskId = Number(req.params.taskId)
  const token = req.cookies.jwt
  try {
    if (Number.isNaN(taskId)) {
      throw new Error('ID de tarefa inválido na URL')
    }
    const task = await new TaskModel().get(taskId)
    if (task === null) {
      throw new Error('Tarefa não encontrada')
    }
    const tokenDecoded = jwt.decode(token)

    if (typeof tokenDecoded === 'string' || tokenDecoded === null) {
      throw new Error('Problema no token')
    }

    const { observations } = await new ObservationModel().list({
      where: {
        task: {
          id: taskId
        }
      },
      order: {
        registrationdate: {
          direction: 'desc'
        }
      }
    })

    const taskObservations: any[] = []
    for (const observation of observations) {
      taskObservations.push({
        id: observation.id,
        description: observation.description,
        user: observation.user.login,
        date: handleDateTime(observation.registrationdate),
        isObservatioUserLogged: observation.user.login === tokenDecoded.username
      })
    }

    const taskResponse = {
      id: task.id,
      title: task.title,
      description: task.description,
      responsible: task.responsibleUser.login,
      priority: task.priority.description,
      type: task.type_task.description,
      creation: handleDateLocale(task.openingDate),
      status: task.status.description,
      observations: taskObservations,
      isUserLogged: task.responsibleUser.login === tokenDecoded.username
    }
    res.render('detail', {
      task: taskResponse
    })
  } catch (err) {
    const errors = apiErrorHandling(err)
    res.render('home', {
      errors
    })
  }
}

export const taskAssumePost = async (req: Request, res: Response): Promise<void> => {
  const taskId = Number(req.params.taskId)
  const token = req.cookies.jwt
  try {
    if (Number.isNaN(taskId)) {
      throw new Error('ID de tarefa inválido na URL')
    }
    const tokenDecoded = jwt.decode(token)

    if (typeof tokenDecoded === 'string' || tokenDecoded === null) {
      throw new Error('Problema no token')
    }

    await new TaskModel().updateUser(taskId, Number(tokenDecoded.id))

    res.redirect(`/task/${req.params.taskId}`)
  } catch (err) {
    const errors = apiErrorHandling(err)
    res.render('home', {
      errors
    })
  }
}

export const taskFinalizePost = async (req: Request, res: Response): Promise<void> => {
  const taskId = Number(req.params.taskId)

  try {
    if (Number.isNaN(taskId)) {
      throw new Error('ID de tarefa inválido na URL')
    }

    await new TaskModel().finalize(taskId)

    res.redirect('/home')
  } catch (err) {
    const errors = apiErrorHandling(err)
    console.log(errors)
    res.render('home', {
      errors
    })
  }
}
