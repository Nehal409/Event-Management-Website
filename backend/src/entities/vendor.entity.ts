import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	Unique,
	OneToMany,
	ManyToMany,
} from "typeorm";
import { Event } from "./event.entity";
import { Service } from "./services.entity";

@Entity()
export class Vendor {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	phone: string;

	@OneToMany(() => Event, event => event.vendor)
	events: Event[];

	@ManyToMany(() => Service, service => service.services)
	vendors: Service[];
}
