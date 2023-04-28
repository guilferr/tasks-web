import { type FindManyOptions } from 'typeorm'
import { type CreateObservationParams, type ListObservationsResponse, type iObservation } from '../interfaces/observationInterface'
import { AppDataSource } from '../orm/database/data-source'
import { Observation } from '../orm/models/Observation'

export class ObservationModel implements iObservation {
  private readonly obsRepo = AppDataSource.getRepository(Observation)

  async create (params: CreateObservationParams): Promise<Observation> {
    const newObs = this.obsRepo.create({
      description: params.description,
      registrationdate: new Date(),
      task: {
        id: params.task
      },
      user: {
        id: params.user
      }
    })

    return await this.obsRepo.save(newObs)
  }

  async list (options: FindManyOptions<Observation> | undefined): Promise<ListObservationsResponse> {
    const [observations, count] = await this.obsRepo.findAndCount({
      ...options,
      relations: {
        user: true
      }
    })

    return {
      observations,
      count
    }
  }

  async get (id: number): Promise<Observation | null> {
    const task = await this.obsRepo.findOne({
      where: { id },
      relations: {
        user: true
      }
    })

    return task
  }

  async update (id: number, description: string): Promise<Observation> {
    const obs = await this.get(id)
    if (obs === null) {
      throw new Error('Observação não encontrada')
    }

    return await this.obsRepo.save({
      id,
      description
    })
  }
}
