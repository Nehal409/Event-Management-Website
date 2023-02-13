import { Venue } from "src/entities/venue.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class venueSeeds1676047059005 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const venues = [
			{
				name: "Courtyard Venues",
				location: "Block-3, 112, Main Alamgir Rd, Karachi",
				capacity: "400",
			},
			{
				name: "Swiss Banquet Hall",
				location: " C 49, Block 13 Gulberg Town, Karachi",
				capacity: "350",
			},
			{
				name: "Casamento Banquet",
				location: "D-9, Block L North Nazimabad Town, Karachi",
				capacity: "300",
			},
			{
				name: "The Royal Court",
				location: "W4H7+H78, Gulshan-e-Iqbal, Karachi",
				capacity: "450",
			},
			{
				name: "Cote Rotie",
				location: "Plot/St, 1, Block 8 Clifton, Karachi",
				capacity: "100",
			},
			{
				name: "Blue Star Banquet Hall",
				location:
					"Shah Jahan Ave،Block 12,Federal B Area,Block 12 Gulberg Town,Karachi",
				capacity: "300",
			},
			{
				name: "Haram Banquet",
				location: "W3V9+MPF, Shahjahan Ave, Block 18 Gulberg Town, Karachi",
				capacity: "350",
			},
			{
				name: "Ocean Banquet",
				location:
					"W3V9+HGX, Federal B Area Block 12 Gulberg Town, Karachi, Karachi City",
				capacity: "400",
			},
			{
				name: "Entertainment Concert Area",
				location:
					"Q3WJ+V28, D.H.A. Phase 8 Zone A Phase 8 Defence Housing Authority, Karachi",
				capacity: "500",
			},
			{
				name: "Bahria Auditorium",
				location:
					"Bahria Auditorium Parking, Karsaz Service Rd E, Karsaz Faisal Cantonment, Karachi",
				capacity: "400",
			},
			{
				name: "Arts Council AC Auditorium II",
				location: "Strachan Rd, Saddar Karachi, Karachi City, Sindh",
				capacity: "270",
			},
			{
				name: "Port Grand karachi",
				location:
					"Port Grand Food St, opposite PNSC Building, West Wharf, Karachi",
				capacity: "1000",
			},
			{
				name: "Karachi Expo Center",
				location: "Main Main University Rd, Block 15 Gulshan-e-Iqbal, Karachi",
				capacity: "800",
			},
			{
				name: "Marriott Hotel",
				location: "9 Abdullah Haroon Rd, Civil Lines Karachi",
				capacity: "600",
			},
			{
				name: "Pearl Continental Hotel",
				location: "Dr Ziauddin Ahmed Rd, Karachi",
				capacity: "300",
			},
			{
				name: "Movenpick Hotel Karachi",
				location: "Movenpick Hotel Karachi Club Road, Club Rd, Karachi",
				capacity: "400",
			},
		];
		await queryRunner.manager
			.createQueryBuilder()
			.insert()
			.into(Venue)
			.values(venues)
			.execute();
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM venues`);
	}
}
