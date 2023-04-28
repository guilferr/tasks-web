import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateTaskType1682104257589 implements MigrationInterface {
  name = 'CreateTaskType1682104257589'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "task_type" ("id" SERIAL NOT NULL, "description" character varying(30) NOT NULL, CONSTRAINT "PK_a0669bd34078f33604ec209dab1" PRIMARY KEY ("id"))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "task_type"')
  }
}
