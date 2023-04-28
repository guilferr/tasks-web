import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tasks } from './Tasks'
import { Users } from './Users'

@Index('fk_observation_tasks_idx', ['taskId'])
@Index('fk_observation_users_idx', ['userId'])
@Entity()
export class Observation {
  @PrimaryGeneratedColumn()
    id: number

  @Column('text')
    description: string

  @Column('timestamp')
    registrationdate: Date

  @Column('integer', { name: 'user_id' })
    userId: number

  @Column('integer', { name: 'task_id' })
    taskId: number

  @ManyToOne(() => Tasks, (tasks) => tasks.observations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
  })
  @JoinColumn([{ name: 'task_id', referencedColumnName: 'id' }])
    task: Tasks

  @ManyToOne(() => Users, (users) => users.observations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION'
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
    user: Users
}
