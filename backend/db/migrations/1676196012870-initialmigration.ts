import { MigrationInterface, QueryRunner } from "typeorm";

export class initialmigration1676196012870 implements MigrationInterface {
    name = 'initialmigration1676196012870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`contact_form\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`subject\` varchar(255) NOT NULL, \`message\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vendor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`venue\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`capacity\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`total_price\` varchar(255) NOT NULL, \`img_url\` varchar(800) NOT NULL, \`vendorId\` int NULL, \`venueId\` int NULL, \`eventTypeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service_services_vendor\` (\`serviceId\` int NOT NULL, \`vendorId\` int NOT NULL, INDEX \`IDX_975bdebc3a12e0c14472ba6fcd\` (\`serviceId\`), INDEX \`IDX_6712dcd687989ab511a82a01a3\` (\`vendorId\`), PRIMARY KEY (\`serviceId\`, \`vendorId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_abedac3524e60db083888140415\` FOREIGN KEY (\`vendorId\`) REFERENCES \`vendor\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_0a7a72120769940b25f994863c7\` FOREIGN KEY (\`venueId\`) REFERENCES \`venue\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_3b674f340d59a5fc144f2229763\` FOREIGN KEY (\`eventTypeId\`) REFERENCES \`event_type\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`service_services_vendor\` ADD CONSTRAINT \`FK_975bdebc3a12e0c14472ba6fcdc\` FOREIGN KEY (\`serviceId\`) REFERENCES \`service\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`service_services_vendor\` ADD CONSTRAINT \`FK_6712dcd687989ab511a82a01a39\` FOREIGN KEY (\`vendorId\`) REFERENCES \`vendor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`service_services_vendor\` DROP FOREIGN KEY \`FK_6712dcd687989ab511a82a01a39\``);
        await queryRunner.query(`ALTER TABLE \`service_services_vendor\` DROP FOREIGN KEY \`FK_975bdebc3a12e0c14472ba6fcdc\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_3b674f340d59a5fc144f2229763\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_0a7a72120769940b25f994863c7\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_abedac3524e60db083888140415\``);
        await queryRunner.query(`DROP INDEX \`IDX_6712dcd687989ab511a82a01a3\` ON \`service_services_vendor\``);
        await queryRunner.query(`DROP INDEX \`IDX_975bdebc3a12e0c14472ba6fcd\` ON \`service_services_vendor\``);
        await queryRunner.query(`DROP TABLE \`service_services_vendor\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`event_type\``);
        await queryRunner.query(`DROP TABLE \`event\``);
        await queryRunner.query(`DROP TABLE \`venue\``);
        await queryRunner.query(`DROP TABLE \`vendor\``);
        await queryRunner.query(`DROP TABLE \`service\``);
        await queryRunner.query(`DROP TABLE \`contact_form\``);
    }

}
