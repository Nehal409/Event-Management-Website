import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class ReceiptDto {
	@IsNotEmpty()
	@IsString()
	id: string;

	@IsNotEmpty()
	userId: number;

	@IsNotEmpty()
	@IsString()
	eventBookingId: string;

	@IsNotEmpty()
	@IsString()
	billingDetailsId: string;
}
