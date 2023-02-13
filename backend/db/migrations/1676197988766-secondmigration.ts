import { MigrationInterface, QueryRunner } from "typeorm";

export class secondmigration1676197988766 implements MigrationInterface {
    name = 'secondmigration1676197988766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_abedac3524e60db083888140415\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_0a7a72120769940b25f994863c7\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_3b674f340d59a5fc144f2229763\``);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`vendorId\` \`vendorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`venueId\` \`venueId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`eventTypeId\` \`eventTypeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_abedac3524e60db083888140415\` FOREIGN KEY (\`vendorId\`) REFERENCES \`vendor\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_0a7a72120769940b25f994863c7\` FOREIGN KEY (\`venueId\`) REFERENCES \`venue\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_3b674f340d59a5fc144f2229763\` FOREIGN KEY (\`eventTypeId\`) REFERENCES \`event_type\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_3b674f340d59a5fc144f2229763\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_0a7a72120769940b25f994863c7\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_abedac3524e60db083888140415\``);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`eventTypeId\` \`eventTypeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`venueId\` \`venueId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`vendorId\` \`vendorId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_3b674f340d59a5fc144f2229763\` FOREIGN KEY (\`eventTypeId\`) REFERENCES \`event_type\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_0a7a72120769940b25f994863c7\` FOREIGN KEY (\`venueId\`) REFERENCES \`venue\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_abedac3524e60db083888140415\` FOREIGN KEY (\`vendorId\`) REFERENCES \`vendor\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
