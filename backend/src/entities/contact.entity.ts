import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
} from "typeorm";

@Entity()
export class ContactForm {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	createdDate: Date;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	phone: string;

	@Column()
	subject: string;

	@Column()
	message: string;
}
