import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Event } from "./event.entity";

@Entity()
export class Venue {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	location: string;

	@Column()
	capacity: string;

	@OneToMany(() => Event, event => event.venue)
	events: Event[];
}
