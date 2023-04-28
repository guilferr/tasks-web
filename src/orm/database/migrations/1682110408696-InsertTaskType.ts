import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class InsertTaskType1682110408696 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('INSERT INTO public.task_type(description) VALUES (\'Incidente\')')
    await queryRunner.query('INSERT INTO public.task_type(description) VALUES (\'Solicitação de Serviço\')')
    await queryRunner.query('INSERT INTO public.task_type(description) VALUES (\'Melhorias\')')
    await queryRunner.query('INSERT INTO public.task_type(description) VALUES (\'Projetos\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM public.task_type')
  }
}
