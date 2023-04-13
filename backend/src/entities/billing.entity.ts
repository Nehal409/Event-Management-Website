import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class BillingDetails {
	@PrimaryGeneratedColumn()
	id: number;

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
	cnicNumber: string;
}
