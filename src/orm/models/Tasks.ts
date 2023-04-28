import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Observation } from './Observation'
import { Priority } from './Priority'
import { TaskStatus } from './TaskStatus'
import { TaskType } from './TaskType'
import { Users } from './Users'

@Index('fk_tasks_priority_idx', ['priorityId'])
@Index('fk_tasks_task_type_idx', ['typeId'])
@Index('fk_tasks_task_status_idx', ['statusId'])
@Index('fk_tasks_users_idx', ['userResponsible'])
@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
    id: number

  @Column('character varying', { length: 100 })
    title: string

  @Column('date', { name: 'opening_date' })
    openingDate: string

  @Column('text')
    description: string

  @Column('integer', { name: 'priority_id' })
    priorityId: number

  @Column('integer', { name: 'type_id' })
    typeId: number

  @Column('integer', { name: 'status_id' })
    statusId: number

  @Column('integer', { name: 'user_responsible' })
    userResponsible: number

  @OneToMany(() => Observation, (observation) => observation.task)
    observations: Observation[]

  @ManyToOne(() => Priority, (priority) => priority.tasks, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
  })
  @JoinColumn([{ name: 'priority_id', referencedColumnName: 'id' }])
    priority: Priority

  @ManyToOne(() => TaskType, (taskType) => taskType.tasks, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
  })
  @JoinColumn([{ name: 'type_id', referencedColumnName: 'id' }])
    type_task: TaskType

  @ManyToOne(() => TaskStatus, (taskStatus) => taskStatus.tasks, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
  })
  @JoinColumn([{ name: 'status_id', referencedColumnName: 'id' }])
    status: TaskStatus

  @ManyToOne(() => Users, (users) => users.tasks, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
  })
  @JoinColumn([{ name: 'user_responsible', referencedColumnName: 'id' }])
    responsibleUser: Users
}
