import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreatePriority1682103981365 implements MigrationInterface {
  name = 'CreatePriority1682103981365'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "priority" ("id" SERIAL NOT NULL, "description" character varying(20) NOT NULL, CONSTRAINT "PK_413921aa4a118e20f361ceba8b4" PRIMARY KEY ("id"))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "priority"')
  }
}
