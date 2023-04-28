import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Tasks } from './Tasks'

@Entity()
export class Priority {
  @PrimaryGeneratedColumn()
    id: number

  @Column('character varying', { length: 20 })
    description: string

  @OneToMany(() => Tasks, (tasks) => tasks.priority)
    tasks: Tasks[]
}
