import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OTP {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	code: string;

	@Column()
	email: string;

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	createdDate: Date;

	@Column({ type: "timestamp" })
	expireDate: Date;
}
