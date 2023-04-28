import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class RelationTasksStatus1682107652455 implements MigrationInterface {
  name = 'RelationTasksStatus1682107652455'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE INDEX "fk_tasks_task_status_idx" ON "tasks" ("status_id") ')
    await queryRunner.query('ALTER TABLE "tasks" ADD CONSTRAINT "FK_e28288969fa7827bd12680cfe10" FOREIGN KEY ("status_id") REFERENCES "task_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "tasks" DROP CONSTRAINT "FK_e28288969fa7827bd12680cfe10"')
    await queryRunner.query('DROP INDEX "public"."fk_tasks_task_status_idx"')
  }
}
