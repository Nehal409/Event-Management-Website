import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
	PrimaryColumn,
} from "typeorm";
import { Event } from "./event.entity";
import { EventBookingServices } from "./eventBookingServices.entity";
import { Receipt } from "./receipt.entity";

export enum selectedSlot {
	MORNING = "morning",
	AFTERNOON = "afternoon",
	EVENING = "evening",
	NIGHT = "night",
}

@Entity()
export class EventBooking {
	@PrimaryColumn({ length: 50 })
	id: string;

	@Column({
		type: "enum",
		enum: selectedSlot,
		default: selectedSlot.MORNING,
	})
	selected_slots: string;

	@ManyToOne(() => Event, event => event.eventBookings, {
		onDelete: "SET NULL",
	})
	events: Event;

	@OneToMany(
		() => EventBookingServices,
		eventBookingService => eventBookingService.eventBooking,
	)
	eventBookingService: EventBookingServices[];

	@OneToMany(() => Receipt, receipt => receipt.eventBooking, {
		onDelete: "SET NULL",
	})
	receipt: Receipt[];
}
