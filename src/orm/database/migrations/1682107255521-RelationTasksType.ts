import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class RelationTasksType1682107255521 implements MigrationInterface {
  name = 'RelationTasksType1682107255521'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE INDEX "fk_tasks_task_type_idx" ON "tasks" ("type_id") ')
    await queryRunner.query('ALTER TABLE "tasks" ADD CONSTRAINT "FK_a3405e60f0cbc9980bd07eb4f72" FOREIGN KEY ("type_id") REFERENCES "task_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "tasks" DROP CONSTRAINT "FK_a3405e60f0cbc9980bd07eb4f72"')
    await queryRunner.query('DROP INDEX "public"."fk_tasks_task_type_idx"')
  }
}
