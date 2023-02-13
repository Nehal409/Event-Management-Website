import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	ManyToMany,
	JoinTable,
} from "typeorm";

import { Vendor } from "./vendor.entity";

@Entity()
export class Service {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@ManyToMany(() => Vendor, vendor => vendor.vendors)
	@JoinTable()
	services: Vendor[];
}
