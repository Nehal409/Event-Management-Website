import { EventType } from "src/entities/event-type.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class channelSeeds1675766022400 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const eventType = [
			{
				name: "Weddings",
			},
			{
				name: "Birthdays",
			},
			{
				name: "Concerts",
			},
			{
				name: "Corporate Events",
			},
		];
		await queryRunner.manager
			.createQueryBuilder()
			.insert()
			.into(EventType)
			.values(eventType)
			.execute();
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM eventType`);
	}
}
