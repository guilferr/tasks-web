import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateObservation1682105281920 implements MigrationInterface {
  name = 'CreateObservation1682105281920'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "observation" ("id" SERIAL NOT NULL, "description" text NOT NULL, "registrationdate" TIMESTAMP NOT NULL, "user_id" integer NOT NULL, "task_id" integer NOT NULL, CONSTRAINT "PK_77a736edc631a400b788ce302cb" PRIMARY KEY ("id"))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "observation"')
  }
}
