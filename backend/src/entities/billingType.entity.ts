import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
	PrimaryColumn,
} from "typeorm";
import { CreditCard } from "./creditCard.entity";
import { BillingDetails } from "./billingDetails.entity";

export enum paymentMethod {
	BANK = "bank",
	CARD = "card",
	EASYPAISA = "easypaisa",
	JAZZCASH = "jazzcash",
}

@Entity()
export class BillingType {
	@PrimaryColumn({ length: 50 })
	id: string;

	@Column({
		type: "enum",
		enum: paymentMethod,
		default: paymentMethod.CARD,
	})
	paymentMethod: string;

	@ManyToOne(() => CreditCard, creditCard => creditCard.billingType, {
		nullable: true,
	})
	creditCard: CreditCard;

	@OneToMany(
		() => BillingDetails,
		billingDetails => billingDetails.billingType,
		{
			onDelete: "SET NULL",
		},
	)
	billingDetails: BillingDetails;
}
