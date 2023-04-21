import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	PrimaryColumn,
} from "typeorm";
import { EventBooking } from "./eventBooking.entity";

@Entity()
export class EventBookingServices {
	@PrimaryColumn({ length: 50 })
	id: string;

	@Column()
	serviceName: string;

	@ManyToOne(
		() => EventBooking,
		eventBooking => eventBooking.eventBookingService,
		{
			onDelete: "SET NULL",
		},
	)
	eventBooking: EventBooking;
}
