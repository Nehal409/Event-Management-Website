import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { BillingType } from "./billingType.entity";

@Entity()
export class CreditCard {
	@PrimaryColumn({ length: 50 })
	id: string;

	@Column()
	creditCardNumber: string;

	@Column()
	nameOnCard: string;

	@Column()
	expMonth: string;

	@Column()
	expYear: string;

	@Column()
	cvv: string;

	@OneToMany(() => BillingType, billingType => billingType.creditCard, {
		onDelete: "SET NULL",
	})
	billingType: BillingType[];
}
