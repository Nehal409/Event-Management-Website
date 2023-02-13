import { Vendor } from "src/entities/vendor.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class vendorSeeds1676047048400 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const vendors = [
			{
				name: "StoryTellers Event Planning",
				email: "storytellers123@gmail.com",
				phone: "03452173843",
			},
			{
				name: "Bridal Bliss",
				email: "bridal344@gmail.com",
				phone: "03354773940",
			},
			{
				name: "A Flair to Remember",
				email: "flairTo@gmail.com",
				phone: "03216374890",
			},
			{
				name: "Wedding River",
				email: "weddingriv@gmail.com",
				phone: "03253784948",
			},
			{
				name: "Party Lighting",
				email: "party999@gmail.com",
				phone: "03362883645",
			},
			{
				name: "Birthday Express",
				email: "birthdayexp@gmail.com",
				phone: "03342887364",
			},
			{
				name: "InHouse Birthday",
				email: "inhouse232@gmail.com",
				phone: "03342931231",
			},
			{
				name: "Fun and Festive",
				email: "festival343@gmail.com",
				phone: "03237489548",
			},
			{
				name: "Slate & Crystal Events",
				email: "slate.cryste_234@gmail.com",
				phone: "03342384756",
			},
			{
				name: "Be Our Guest Events",
				email: "beGuest232@gmail.com",
				phone: "03425638763",
			},
			{
				name: "Picture Perfect Event Planning",
				email: "picture230@gmail.com",
				phone: "03354273549",
			},
			{
				name: "Mosaic Events",
				email: "mosaicOrg998@gmail.com",
				phone: "03452187647",
			},
			{
				name: "Poppy Events",
				email: "poopyseed66@gmail.com",
				phone: "03342564637",
			},
			{
				name: "SeaSide Events",
				email: "seaatside33@gmail.com",
				phone: "03423285009",
			},
			{
				name: "Woderful Events",
				email: "wonderful222@gmail.com",
				phone: "03353773890",
			},
			{
				name: "Dancing Leaf Events",
				email: "dancing222@gmail.com",
				phone: "03342638900",
			},
		];
		await queryRunner.manager
			.createQueryBuilder()
			.insert()
			.into(Vendor)
			.values(vendors)
			.execute();
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM vendors`);
	}
}
