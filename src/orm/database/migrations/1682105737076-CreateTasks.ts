import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateTasks1682105737076 implements MigrationInterface {
  name = 'CreateTasks1682105737076'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "opening_date" date NOT NULL, "description" text NOT NULL, "priority_id" integer NOT NULL, "type_id" integer NOT NULL, "status_id" integer NOT NULL, "user_responsible" integer NOT NULL, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "tasks"')
  }
}
