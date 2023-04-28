import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Observation } from './Observation'
import { Tasks } from './Tasks'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
    id: number

  @Column('character varying', { length: 10 })
    login: string

  @Column('character varying', { length: 64 })
    password: string

  @Column('character varying', { length: 64 })
    salt: string

  @OneToMany(() => Tasks, (tasks) => tasks.responsibleUser)
    tasks: Tasks[]

  @OneToMany(() => Observation, (observation) => observation.user)
    observations: Observation[]
}
