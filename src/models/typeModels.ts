import { type FindOptionsWhere } from 'typeorm'
import { type iType } from '../interfaces/typeInterface'
import { AppDataSource } from '../orm/database/data-source'
import { TaskType } from '../orm/models/TaskType'

export class TypeModel implements iType {
  private readonly typeRepo = AppDataSource.getRepository(TaskType)

  async list (options: FindOptionsWhere<TaskType> | Array<FindOptionsWhere<TaskType>> | undefined): Promise<TaskType[]> {
    return await this.typeRepo.find({
      where: options
    })
  }

  async get (id: number): Promise<TaskType | null> {
    const type = await this.typeRepo.findOne({
      where: { id }
    })

    return type
  }
}
