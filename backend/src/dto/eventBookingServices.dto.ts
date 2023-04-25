import { IsNotEmpty, IsString } from "class-validator";

export class EventBookingServiceDto {
	@IsNotEmpty()
	@IsString()
	id: string;

	@IsNotEmpty()
	serviceName: string;

	@IsNotEmpty()
	eventBookingId: string;
}
