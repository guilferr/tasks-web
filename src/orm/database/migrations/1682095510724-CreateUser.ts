import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateUser1682095510724 implements MigrationInterface {
  name = 'CreateUser1682095510724'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "users" ("id" SERIAL NOT NULL, "login" character varying(10) NOT NULL, "password" character varying(64) NOT NULL, "salt" character varying(64) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "users"')
  }
}
