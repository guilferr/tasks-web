import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Tasks } from './Tasks'

@Entity('task_type')
export class TaskType {
  @PrimaryGeneratedColumn()
    id: number

  @Column('character varying', { length: 30 })
    description: string

  @OneToMany(() => Tasks, (tasks) => tasks.type_task)
    tasks: Tasks[]
}
