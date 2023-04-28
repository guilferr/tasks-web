import { type FindManyOptions } from 'typeorm'
import { type Observation } from '../orm/models/Observation'

export interface CreateObservationParams {
  description: string
  task: number
  user: number
}

export interface ListObservationsResponse {
  observations: Observation[]
  count: number
}

export interface iObservation {
  create: (params: CreateObservationParams) => Promise<Observation>
  list: (options: FindManyOptions<Observation> | undefined) => Promise<ListObservationsResponse>
  get: (id: number) => Promise<Observation | null>
  update: (id: number, description: string) => Promise<Observation>
}
