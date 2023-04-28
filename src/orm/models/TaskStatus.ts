import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Tasks } from './Tasks'

@Entity('task_status')
export class TaskStatus {
  @PrimaryGeneratedColumn()
    id: number

  @Column('character varying', { length: 10 })
    description: string

  @OneToMany(() => Tasks, (tasks) => tasks.status)
    tasks: Tasks[]
}
