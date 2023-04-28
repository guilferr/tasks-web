import { type FindOptionsWhere } from 'typeorm'
import { type iPriority } from '../interfaces/priorityInterface'
import { AppDataSource } from '../orm/database/data-source'
import { Priority } from '../orm/models/Priority'

export class PriorityModel implements iPriority {
  private readonly priorityRepo = AppDataSource.getRepository(Priority)

  async list (options: FindOptionsWhere<Priority> | Array<FindOptionsWhere<Priority>> | undefined): Promise<Priority[]> {
    return await this.priorityRepo.find({
      where: options
    })
  }

  async get (id: number): Promise<Priority | null> {
    const priority = await this.priorityRepo.findOne({
      where: { id }
    })

    return priority
  }
}
