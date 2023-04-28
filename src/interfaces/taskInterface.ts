import { type FindManyOptions } from 'typeorm'
import { type Tasks } from '../orm/models/Tasks'

export interface CreateTaskParams {
  title: string
  description: string
  type: number
  priority: number
  user: number
}

export interface ListTasksResponse {
  tasks: Tasks[]
  count: number
}

export interface iTask {
  create: (params: CreateTaskParams) => Promise<Tasks>
  list: (options: FindManyOptions<Tasks> | undefined) => Promise<ListTasksResponse>
  get: (id: number) => Promise<Tasks | null>
  updateUser: (id: number, userId: number) => Promise<Tasks>
  finalize: (id: number) => Promise<void>
}
