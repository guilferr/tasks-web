import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class RelationTasksObservation1682108197025 implements MigrationInterface {
  name = 'RelationTasksObservation1682108197025'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE INDEX "fk_observation_tasks_idx" ON "observation" ("task_id") ')
    await queryRunner.query('ALTER TABLE "observation" ADD CONSTRAINT "FK_5744a7b1928c240d62c498a271a" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "observation" DROP CONSTRAINT "FK_5744a7b1928c240d62c498a271a"')
    await queryRunner.query('DROP INDEX "public"."fk_observation_tasks_idx"')
  }
}
