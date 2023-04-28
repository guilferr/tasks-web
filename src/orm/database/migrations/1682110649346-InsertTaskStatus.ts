import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class InsertTaskStatus1682110649346 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO public.task_status(description) VALUES (\'Aberta\')')
    await queryRunner.query('INSERT INTO public.task_status(description) VALUES (\'Concluída\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM public.task_status')
  }
}
