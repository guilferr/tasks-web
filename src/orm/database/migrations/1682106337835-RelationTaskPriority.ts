import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class RelationTaskPriority1682106337835 implements MigrationInterface {
  name = 'RelationTaskPriority1682106337835'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE INDEX "fk_tasks_priority_idx" ON "tasks" ("priority_id") ')
    await queryRunner.query('ALTER TABLE "tasks" ADD CONSTRAINT "FK_5d1c8f7898b5b84ad5ce08fcff8" FOREIGN KEY ("priority_id") REFERENCES "priority"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "tasks" DROP CONSTRAINT "FK_5d1c8f7898b5b84ad5ce08fcff8"')
    await queryRunner.query('DROP INDEX "public"."fk_tasks_priority_idx"')
  }
}
