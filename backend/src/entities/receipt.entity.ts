import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	PrimaryColumn,
} from "typeorm";
import { BillingType } from "./billingType.entity";
import { User } from "./user.entity";
import { EventBooking } from "./eventBooking.entity";
import { BillingDetails } from "./billingDetails.entity";

@Entity()
export class Receipt {
	@PrimaryColumn({ length: 50 })
	id: string;

	@ManyToOne(() => User, user => user.receipt)
	user: User;

	@ManyToOne(() => EventBooking, eventBooking => eventBooking.receipt)
	eventBooking: EventBooking;

	@ManyToOne(() => BillingDetails, billingDetails => billingDetails.receipt)
	billingDetails: BillingDetails;
	receipt: { id: string };
}
