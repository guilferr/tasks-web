import { type FindManyOptions } from 'typeorm'
import { type CreateTaskParams, type ListTasksResponse, type iTask } from '../interfaces/taskInterface'
import { AppDataSource } from '../orm/database/data-source'
import { Tasks } from '../orm/models/Tasks'
import { handleDate } from '../utils/handleDate'

export class TaskModel implements iTask {
  private readonly taskRepo = AppDataSource.getRepository(Tasks)

  async create (params: CreateTaskParams): Promise<Tasks> {
    const newUser = this.taskRepo.create({
      title: params.title,
      description: params.description,
      openingDate: handleDate(new Date()),
      priority: {
        id: params.priority
      },
      type_task: {
        id: params.type
      },
      responsibleUser: {
        id: params.user
      },
      status: {
        id: 1
      }
    })

    return await this.taskRepo.save(newUser)
  }

  async list (options: FindManyOptions<Tasks> | undefined): Promise<ListTasksResponse> {
    const [tasks, count] = await this.taskRepo.findAndCount({
      ...options,
      relations: {
        priority: true,
        type_task: true,
        status: true,
        responsibleUser: true,
        observations: {
          user: true
        }
      }
    })

    return {
      tasks,
      count
    }
  }

  async get (id: number): Promise<Tasks | null> {
    const task = await this.taskRepo.findOne({
      where: { id },
      relations: {
        priority: true,
        type_task: true,
        status: true,
        responsibleUser: true,
        observations: {
          user: true
        }
      }
    })

    return task
  }

  async updateUser (id: number, userId: number): Promise<Tasks> {
    const task = await this.get(id)
    if (task === null) {
      throw new Error('Tarefa não encontrada')
    }

    return await this.taskRepo.save({
      id,
      responsibleUser: {
        id: userId
      }
    })
  }

  async finalize (id: number): Promise<void> {
    const task = await this.get(id)
    if (task === null) {
      throw new Error('Tarefa não encontrada')
    }

    await this.taskRepo.save({
      id,
      status: {
        id: 2
      }
    })
  }
}
