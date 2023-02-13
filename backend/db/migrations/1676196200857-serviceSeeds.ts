import { Service } from "src/entities/services.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class serviceSeeds1676196200857 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const services = [
			{
				name: "sound system",
			},
			{
				name: "lighting system",
			},
			{
				name: "catering",
			},
			{
				name: "decoration",
			},
			{
				name: "stage",
			},
			{
				name: "waiters",
			},
			{
				name: "crocery",
			},
			{
				name: "security",
			},
			{
				name: "birthday cake",
			},
			{
				name: "party supplies",
			},
			{
				name: "magic show",
			},
			{
				name: "fireworks",
			},
			{
				name: "photography",
			},
			{
				name: "multimedia projector",
			},
			{
				name: "accommodation",
			},
		];
		await queryRunner.manager
			.createQueryBuilder()
			.insert()
			.into(Service)
			.values(services)
			.execute();
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM services`);
	}
}
