import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
	ManyToOne,
	OneToMany,
} from "typeorm";
import { EventType } from "./event-type.entity";
import { Vendor } from "./vendor.entity";
import { Venue } from "./venue.entity";
import { EventBooking } from "./eventBooking.entity";

@Entity()
export class Event {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	total_price: string;

	@Column({ length: 800 })
	img_url: string;

	@ManyToOne(() => Vendor, vendor => vendor.events, {
		onDelete: "SET NULL",
	})
	vendor: Vendor;

	@ManyToOne(() => Venue, venue => venue.events, {
		onDelete: "SET NULL",
	})
	venue: Venue;

	@ManyToOne(() => EventType, eventType => eventType.events, {
		onDelete: "SET NULL",
	})
	eventType: EventType;

	@OneToMany(() => EventBooking, eventBooking => eventBooking.events)
	eventBookings: EventBooking[];
}
