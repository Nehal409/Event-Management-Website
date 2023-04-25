import { IsNotEmpty, IsEnum, IsOptional } from "class-validator";
import { paymentMethod } from "../entities/billingType.entity";

export class BillingTypeDto {
	@IsNotEmpty()
	id: string;

	@IsNotEmpty()
	@IsEnum(paymentMethod)
	paymentMethod: string;

	@IsOptional()
	creditCardId: string;
}
