import { type FindOptionsWhere } from 'typeorm'
import { type Users } from '../orm/models/Users'

export interface iUser {
  create: (username: string, password: string) => Promise<Users>
  list: (options: FindOptionsWhere<Users> | Array<FindOptionsWhere<Users>> | undefined) => Promise<Users[]>
  get: (id: number) => Promise<Users | null>
}
