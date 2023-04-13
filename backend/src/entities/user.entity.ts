import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
	OneToMany,
} from "typeorm";

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
}
