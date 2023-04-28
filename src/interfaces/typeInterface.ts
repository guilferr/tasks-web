import { type FindOptionsWhere } from 'typeorm'
import { type TaskType } from '../orm/models/TaskType'

export interface iType {
  list: (options: FindOptionsWhere<TaskType> | Array<FindOptionsWhere<TaskType>> | undefined) => Promise<TaskType[]>
  get: (id: number) => Promise<TaskType | null>
}
