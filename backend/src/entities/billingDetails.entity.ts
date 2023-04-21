import { Entity, Column, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { BillingType } from "./billingType.entity";
import { Receipt } from "./receipt.entity";

@Entity()
export class BillingDetails {
	@PrimaryColumn({ length: 50 })
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	address: string;

	@Column()
	phone: string;

	@Column()
	city: string;

	@Column()
	cnic: string;

	@ManyToOne(() => BillingType, billingType => billingType.billingDetails)
	billingType: BillingType;

	@OneToMany(() => Receipt, receipt => receipt.billingDetails, {
		onDelete: "SET NULL",
	})
	receipt: Receipt[];
}
