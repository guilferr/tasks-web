import dotenv from 'dotenv'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: true,
  logger: 'file',
  migrationsRun: true,
  entities: [
    'dist/src/orm/models/**/*{.ts,.js}'
  ],
  migrations: [
    'dist/src/orm/database/migrations/**/*{.ts,.js}'
  ]
})
