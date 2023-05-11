import { MigrationInterface, QueryRunner } from "typeorm";

export class secondMigration1683795869962 implements MigrationInterface {
    name = 'secondMigration1683795869962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`billing_details\` ADD \`bookingDate\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`billing_type\` DROP FOREIGN KEY \`FK_5b8b5a0a55b973efc24aeb9b7f2\``);
        await queryRunner.query(`ALTER TABLE \`billing_type\` CHANGE \`creditCardId\` \`creditCardId\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_abedac3524e60db083888140415\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_0a7a72120769940b25f994863c7\``);
        await queryRunner.query(`ALTER TABLE \`event\` DROP FOREIGN KEY \`FK_3b674f340d59a5fc144f2229763\``);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`vendorId\` \`vendorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`venueId\` \`venueId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`eventTypeId\` \`eventTypeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`event_booking_services\` DROP FOREIGN KEY \`FK_71514e4683b2ce9bf799c862548\``);
        await queryRunner.query(`ALTER TABLE \`event_booking_services\` CHANGE \`eventBookingId\` \`eventBookingId\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`event_booking\` DROP FOREIGN KEY \`FK_03742a5ee43f634888ce90c6730\``);
        await queryRunner.query(`ALTER TABLE \`event_booking\` CHANGE \`eventsId\` \`eventsId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`receipt\` DROP FOREIGN KEY \`FK_e011d4704c491f4d821d7ebb6ca\``);
        await queryRunner.query(`ALTER TABLE \`receipt\` DROP FOREIGN KEY \`FK_38e788c8aac88694078b61ad920\``);
        await queryRunner.query(`ALTER TABLE \`receipt\` DROP FOREIGN KEY \`FK_29dede2fdf3f2a3b0b694c7c079\``);
        await queryRunner.query(`ALTER TABLE \`receipt\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`receipt\` CHANGE \`eventBookingId\` \`eventBookingId\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`receipt\` CHANGE \`billingDetailsId\` \`billingDetailsId\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`billing_details\` DROP FOREIGN KEY \`FK_a31dfff6c247b12c82a31a1c4f8\``);
        await queryRunner.query(`ALTER TABLE \`billing_details\` CHANGE \`billingTypeId\` \`billingTypeId\` varchar(50) NULL`);
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(`ALTER TABLE \`billing_details\` CHANGE \`billingTypeId\` \`billingTypeId\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`billing_details\` ADD CONSTRAINT \`FK_a31dfff6c247b12c82a31a1c4f8\` FOREIGN KEY (\`billingTypeId\`) REFERENCES \`billing_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`receipt\` CHANGE \`billingDetailsId\` \`billingDetailsId\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`receipt\` CHANGE \`eventBookingId\` \`eventBookingId\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`receipt\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`receipt\` ADD CONSTRAINT \`FK_29dede2fdf3f2a3b0b694c7c079\` FOREIGN KEY (\`billingDetailsId\`) REFERENCES \`billing_details\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`receipt\` ADD CONSTRAINT \`FK_38e788c8aac88694078b61ad920\` FOREIGN KEY (\`eventBookingId\`) REFERENCES \`event_booking\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`receipt\` ADD CONSTRAINT \`FK_e011d4704c491f4d821d7ebb6ca\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_booking\` CHANGE \`eventsId\` \`eventsId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`event_booking\` ADD CONSTRAINT \`FK_03742a5ee43f634888ce90c6730\` FOREIGN KEY (\`eventsId\`) REFERENCES \`event\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_booking_services\` CHANGE \`eventBookingId\` \`eventBookingId\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`event_booking_services\` ADD CONSTRAINT \`FK_71514e4683b2ce9bf799c862548\` FOREIGN KEY (\`eventBookingId\`) REFERENCES \`event_booking\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`eventTypeId\` \`eventTypeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`venueId\` \`venueId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`event\` CHANGE \`vendorId\` \`vendorId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_3b674f340d59a5fc144f2229763\` FOREIGN KEY (\`eventTypeId\`) REFERENCES \`event_type\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_0a7a72120769940b25f994863c7\` FOREIGN KEY (\`venueId\`) REFERENCES \`venue\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event\` ADD CONSTRAINT \`FK_abedac3524e60db083888140415\` FOREIGN KEY (\`vendorId\`) REFERENCES \`vendor\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`billing_type\` CHANGE \`creditCardId\` \`creditCardId\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`billing_type\` ADD CONSTRAINT \`FK_5b8b5a0a55b973efc24aeb9b7f2\` FOREIGN KEY (\`creditCardId\`) REFERENCES \`credit_card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`billing_details\` DROP COLUMN \`bookingDate\``);
    }

}
