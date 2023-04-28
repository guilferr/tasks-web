import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class RelationTasksUsers1682107896249 implements MigrationInterface {
  name = 'RelationTasksUsers1682107896249'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE INDEX "fk_tasks_users_idx" ON "tasks" ("user_responsible") ')
    await queryRunner.query('ALTER TABLE "tasks" ADD CONSTRAINT "FK_68c1094832beeaf59439afb4faf" FOREIGN KEY ("user_responsible") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "tasks" DROP CONSTRAINT "FK_68c1094832beeaf59439afb4faf"')
    await queryRunner.query('DROP INDEX "public"."fk_tasks_users_idx"')
  }
}
