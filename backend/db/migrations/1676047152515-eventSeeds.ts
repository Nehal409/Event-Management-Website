// import { EventType } from "src/entities/event-type.entity";
// import { Event } from "src/entities/event.entity";
// import { Vendor } from "src/entities/vendor.entity";
// import { Venue } from "src/entities/venue.entity";
// import { MigrationInterface, QueryRunner } from "typeorm";

// export class eventSeeds1676047152515 implements MigrationInterface {
// 	public async up(queryRunner: QueryRunner): Promise<void> {
// 		const venue = await queryRunner.manager
// 			.createQueryBuilder(Venue, "venues")
// 			.where({ name: "Courtyard Venues" })
// 			.getOne();
// 		console.log(venue);

// 		const vendor = await queryRunner.manager
// 			.createQueryBuilder(Vendor, "vendors")
// 			.where({ name: "StoryTellers Event Planning" })
// 			.getOne();
// 		console.log(vendor);

// 		const eventType = await queryRunner.manager
// 			.createQueryBuilder(EventType, "eventType")
// 			.where({ name: "Weddings" })
// 			.getOne();
// 		console.log(eventType);

// 		const events = [
// 			{
// 				total_price: "2000000",
// 				img_url:
// 					"https://www.dropbox.com/s/be8oappqecrnzk7/wedding1.jpeg?raw=1",
// 				vendorId: vendor.id,
// 				venueId: venue.id,
// 				eventTypeId: eventType.id,
// 			},
// 		];
// 		await queryRunner.manager
// 			.createQueryBuilder()
// 			.insert()
// 			.into(Event)
// 			.values(events)
// 			.execute();
// 	}

// 	public async down(queryRunner: QueryRunner): Promise<void> {
// 		await queryRunner.query(`DELETE FROM events`);
// 	}
// }
