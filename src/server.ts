import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express, { type Request, type Response } from 'express'
import path from 'path'
import 'reflect-metadata'
import { checkUser } from './middleware/authMiddleware'
import { AppDataSource } from './orm/database/data-source'
import authRoutes from './routes/authRoutes'
import homeRoutes from './routes/homeRoutes'
import observationRoutes from './routes/observationRoutes'
import taskDetailRoutes from './routes/taskDetailRoutes'
import taskInsertRoutes from './routes/taskInsertRoutes'

AppDataSource.initialize().then(async () => {
  dotenv.config()
  const app = express()
  const port = process.env.PORT ?? 3001

  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.get('*', checkUser)
  app.use(authRoutes)
  app.use(homeRoutes)
  app.use(taskInsertRoutes)
  app.use(taskDetailRoutes)
  app.use(observationRoutes)
  app.get('/', (req: express.Request, res: express.Response) => { res.redirect('/login') })
  app.use(function (req: Request, res: Response) {
    res.render('error')
  })

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
})
