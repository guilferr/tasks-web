import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class RelationUsersObservation1682108357566 implements MigrationInterface {
  name = 'RelationUsersObservation1682108357566'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE INDEX "fk_observation_users_idx" ON "observation" ("user_id") ')
    await queryRunner.query('ALTER TABLE "observation" ADD CONSTRAINT "FK_5dd2aad395a285ce554e70bb63f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "observation" DROP CONSTRAINT "FK_5dd2aad395a285ce554e70bb63f"')
    await queryRunner.query('DROP INDEX "public"."fk_observation_users_idx"')
  }
}
