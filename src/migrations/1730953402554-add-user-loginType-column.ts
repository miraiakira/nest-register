import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserLoginTypeColumn1730953402554 implements MigrationInterface {
    name = 'AddUserLoginTypeColumn1730953402554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`loginType\` int NOT NULL COMMENT '登陆类型，0 用户名密码登陆， 1 Google 登陆， 2 Github 登陆' DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`loginType\``);
    }

}
