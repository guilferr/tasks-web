import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { ObservationModel } from '../models/observationModel'
import { apiErrorHandling } from '../utils/apiErrorHandling'

export const observationPost = async (req: Request, res: Response): Promise<void> => {
  const taskId = Number(req.params.taskId)
  const token = req.cookies.jwt
  const { observation } = req.body
  try {
    if (Number.isNaN(taskId)) {
      throw new Error('ID de tarefa inválido na URL')
    }
    const tokenDecoded = jwt.decode(token)

    if (typeof tokenDecoded === 'string' || tokenDecoded === null) {
      throw new Error('Problema no token')
    }

    if (observation.length === 0) {
      throw new Error('Não é possível criar uma observação vazia.')
    }

    await new ObservationModel().create({
      description: observation,
      task: taskId,
      user: tokenDecoded.id
    })

    res.redirect(`/task/${req.params.taskId}`)
  } catch (err) {
    const errors = apiErrorHandling(err)
    res.render('detail', {
      errors
    })
  }
}

export const observationEditPost = async (req: Request, res: Response): Promise<void> => {
  const taskId = Number(req.params.taskId)
  const { observation } = req.body
  try {
    if (Number.isNaN(taskId)) {
      throw new Error('ID de tarefa inválido na URL')
    }

    if (observation.length === 0) {
      throw new Error('Não é possível criar uma observação vazia.')
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

    await new ObservationModel().update(observations[0].id, observation)

    res.redirect(`/task/${req.params.taskId}`)
  } catch (err) {
    const errors = apiErrorHandling(err)
    res.render('detail', {
      errors
    })
  }
}
