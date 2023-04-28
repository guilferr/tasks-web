import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateTaskStatus1682104541201 implements MigrationInterface {
  name = 'CreateTaskStatus1682104541201'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "task_status" ("id" SERIAL NOT NULL, "description" character varying(10) NOT NULL, CONSTRAINT "PK_b8747cc6a41b6cef4639babf61d" PRIMARY KEY ("id"))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "task_status"')
  }
}
