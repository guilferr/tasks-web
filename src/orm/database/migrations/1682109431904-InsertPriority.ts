import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class InsertPriority1682109431904 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO public.priority(description) VALUES (\'Sem prioridade\')')
    await queryRunner.query('INSERT INTO public.priority(description) VALUES (\'Baixa\')')
    await queryRunner.query('INSERT INTO public.priority(description) VALUES (\'Média\')')
    await queryRunner.query('INSERT INTO public.priority(description) VALUES (\'Alta\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM public.priority')
  }
}
