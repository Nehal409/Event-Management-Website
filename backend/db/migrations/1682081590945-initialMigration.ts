import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1682081590945 implements MigrationInterface {
    name = 'initialMigration1682081590945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`credit_card\` (\`id\` varchar(50) NOT NULL, \`creditCardNumber\` varchar(255) NOT NULL, \`nameOnCard\` varchar(255) NOT NULL, \`expMonth\` varchar(255) NOT NULL, \`expYear\` varchar(255) NOT NULL, \`cvv\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`billing_type\` (\`id\` varchar(50) NOT NULL, \`paymentMethod\` enum ('bank', 'card', 'easypaisa', 'jazzcash') NOT NULL DEFAULT 'card', \`creditCardId\` varchar(50) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vendor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`venue\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`location\` varchar(255) NOT NULL, \`capacity\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`total_price\` varchar(255) NOT NULL, \`img_url\` varchar(800) NOT NULL, \`vendorId\` int NULL, \`venueId\` int NULL, \`eventTypeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event_booking_services\` (\`id\` varchar(50) NOT NULL, \`serviceName\` varchar(255) NOT NULL, \`eventBookingId\` varchar(50) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event_booking\` (\`id\` varchar(50) NOT NULL, \`selected_slots\` enum ('morning', 'afternoon', 'evening', 'night') NOT NULL DEFAULT 'morning', \`eventsId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`receipt\` (\`id\` varchar(50) NOT NULL, \`userId\` int NULL, \`eventBookingId\` varchar(50) NULL, \`billingDetailsId\` varchar(50) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`billing_details\` (\`id\` varchar(50) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`cnic\` varchar(255) NOT NULL, \`billingTypeId\` varchar(50) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`contact_form\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`subject\` varchar(255) NOT NULL, \`message\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`service_services_vendor\` (\`serviceId\` int NOT NULL, \`vendorId\` int NOT NULL, INDEX \`IDX_975bdebc3a12e0c14472ba6fcd\` (\`serviceId\`), INDEX \`IDX_6712dcd687989ab511a82a01a3\` (\`vendorId\`), PRIMARY KEY (\`serviceId\`, \`vendorId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`billing_type\` ADD CONSTRAINT \`FK_5b8b5a0a55b973efc24aeb9b7f2\` FOREIGN KEY (\`creditCardId\`) REFERENCES \`credit_card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_abedac3524e60db083888140415\` FOREIGN KEY (\`vendorId\`) REFERENCES \`vendor\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_0a7a72120769940b25f994863c7\` FOREIGN KEY (\`venueId\`) REFERENCES \`venue\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_3b674f340d59a5fc144f2229763\` FOREIGN KEY (\`eventTypeId\`) REFERENCES \`event_type\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_booking_services\` ADD CONSTRAINT \`FK_71514e4683b2ce9bf799c862548\` FOREIGN KEY (\`eventBookingId\`) REFERENCES \`event_booking\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_booking\` ADD CONSTRAINT \`FK_03742a5ee43f634888ce90c6730\` FOREIGN KEY (\`eventsId\`) REFERENCES \`event\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`receipt\` ADD CONSTRAINT \`FK_e011d4704c491f4d821d7ebb6ca\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`receipt\` ADD CONSTRAINT \`FK_38e788c8aac88694078b61ad920\` FOREIGN KEY (\`eventBookingId\`) REFERENCES \`event_booking\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`receipt\` ADD CONSTRAINT \`FK_29dede2fdf3f2a3b0b694c7c079\` FOREIGN KEY (\`billingDetailsId\`) REFERENCES \`billing_details\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`billing_details\` ADD CONSTRAINT \`FK_a31dfff6c247b12c82a31a1c4f8\` FOREIGN KEY (\`billingTypeId\`) REFERENCES \`billing_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`service_services_vendor\` ADD CONSTRAINT \`FK_975bdebc3a12e0c14472ba6fcdc\` FOREIGN KEY (\`serviceId\`) REFERENCES \`service\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`service_services_vendor\` ADD CONSTRAINT \`FK_6712dcd687989ab511a82a01a39\` FOREIGN KEY (\`vendorId\`) REFERENCES \`vendor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`service_services_vendor\` DROP FOREIGN KEY \`FK_6712dcd687989ab511a82a01a39\``);
        await queryRunner.query(`ALTER TABLE \`service_services_vendor\` DROP FOREIGN KEY \`FK_975bdebc3a12e0c14472ba6fcdc\``);
        await queryRunner.query(`ALTER TABLE \`billing_details\` DROP FOREIGN KEY \`FK_a31dfff6c247b12c82a31a1c4f8\``);
        await queryRunner.query(`ALTER TABLE \`receipt\` DROP FOREIGN KEY \`FK_29dede2fdf3f2a3b0b694c7c079\``);
        await queryRunner.query(`ALTER TABLE \`receipt\` DROP FOREIGN KEY \`FK_38e788c8aac88694078b61ad920\``);
        await queryRunner.query(`ALTER TABLE \`receipt\` DROP FOREIGN KEY \`FK_e011d4704c491f4d821d7ebb6ca\``);
        await queryRunner.query(`ALTER TABLE \`event_booking\` DROP FOREIGN KEY \`FK_03742a5ee43f634888ce90c6730\``);
        await queryRunner.query(`ALTER TABLE \`event_booking_services\` DROP FOREIGN KEY \`FK_71514e4683b2ce9bf799c862548\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_3b674f340d59a5fc144f2229763\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_0a7a72120769940b25f994863c7\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_abedac3524e60db083888140415\``);
        await queryRunner.query(`ALTER TABLE \`billing_type\` DROP FOREIGN KEY \`FK_5b8b5a0a55b973efc24aeb9b7f2\``);
        await queryRunner.query(`DROP INDEX \`IDX_6712dcd687989ab511a82a01a3\` ON \`service_services_vendor\``);
        await queryRunner.query(`DROP INDEX \`IDX_975bdebc3a12e0c14472ba6fcd\` ON \`service_services_vendor\``);
        await queryRunner.query(`DROP TABLE \`service_services_vendor\``);
        await queryRunner.query(`DROP TABLE \`contact_form\``);
        await queryRunner.query(`DROP TABLE \`billing_details\``);
        await queryRunner.query(`DROP TABLE \`receipt\``);
        await queryRunner.query(`DROP TABLE \`event_booking\``);
        await queryRunner.query(`DROP TABLE \`event_booking_services\``);
        await queryRunner.query(`DROP TABLE \`event\``);
        await queryRunner.query(`DROP TABLE \`venue\``);
        await queryRunner.query(`DROP TABLE \`vendor\``);
        await queryRunner.query(`DROP TABLE \`service\``);
        await queryRunner.query(`DROP TABLE \`event_type\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`billing_type\``);
        await queryRunner.query(`DROP TABLE \`credit_card\``);
    }

}
