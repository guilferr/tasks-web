import { type FindOptionsWhere } from 'typeorm'
import { type Priority } from '../orm/models/Priority'

export interface iPriority {
  list: (options: FindOptionsWhere<Priority> | Array<FindOptionsWhere<Priority>> | undefined) => Promise<Priority[]>
  get: (id: number) => Promise<Priority | null>
}
