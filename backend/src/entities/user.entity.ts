import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
	OneToMany,
} from "typeorm";
import { Receipt } from "./receipt.entity";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@OneToMany(() => Receipt, receipt => receipt.user, {
		onDelete: "SET NULL",
	})
	receipt: Receipt[];
}
