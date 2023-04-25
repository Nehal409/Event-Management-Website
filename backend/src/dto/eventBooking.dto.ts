import { IsNotEmpty, IsEnum, IsString } from "class-validator";
import { selectedSlot } from "src/entities/eventBooking.entity";

export class EventBookingDto {
	@IsNotEmpty()
	@IsString()
	id: string;

	@IsNotEmpty()
	@IsEnum(selectedSlot)
	selected_slots: string;

	@IsNotEmpty()
	eventsId: number;
}
