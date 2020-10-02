import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1601595860194 implements MigrationInterface {
    name = 'Initial1601595860194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "description" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "title" DROP NOT NULL`);
    }

}
