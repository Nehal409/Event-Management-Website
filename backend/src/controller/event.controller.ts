import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
	Get,
	Param,
	ParseIntPipe,
	UseFilters,
	UseGuards,
} from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/filters/httpException.filter";
import { EventBookingDto } from "src/dto/eventBooking.dto";
import { EventBookingServiceDto } from "src/dto/eventBookingServices.dto";
import { EventBooking } from "src/entities/eventBooking.entity";
import { EventBookingServices } from "src/entities/eventBookingServices.entity";
import { EventService } from "src/service/event.service";
import { getCurrentUserById } from "src/utils/decorators/get-user-by-id-jwt.decorator";
import { JwtAuthGuard } from "src/utils/guards/jwt-guard.guard";

@Controller("events")
export class EventController {
	constructor(private readonly eventService: EventService) {}
	/** homepage  */
	@UseGuards(JwtAuthGuard)
	@Get("/types")
	getEventType() {
		return this.eventService.getEventTypes();
	}

	/** vendor webpage  */
	@UseGuards(JwtAuthGuard)
	@Get("/vendors/:id")
	@UseFilters(HttpExceptionFilter)
	getEventVendor(@Param("id", ParseIntPipe) id: number) {
		return this.eventService.getEventVendors(id);
	}

	@UseGuards(JwtAuthGuard)
	@Get("/vendors/eventTypes/:id")
	@UseFilters(HttpExceptionFilter)
	async getEventTyprVendor(
		@Param("id", ParseIntPipe) id: number,
		@getCurrentUserById() userId: number,
	) {
		const vendorType = await this.eventService.getEventTypeVendor(id);

		const loggedInUser = userId;
		return { vendorType, loggedInUser };
	}

	@UseGuards(JwtAuthGuard)
	/** vendorDetails webpage  */
	@Get("/vendors/venues/:id")
	@UseFilters(HttpExceptionFilter)
	getVendorServices(@Param("id", ParseIntPipe) id: number) {
		return this.eventService.getVenue(id);
	}

	@UseGuards(JwtAuthGuard)
	@Get("/vendors/services/:id")
	@UseFilters(HttpExceptionFilter)
	getServices(@Param("id", ParseIntPipe) id: number) {
		return this.eventService.getServices(id);
	}

	@UseGuards(JwtAuthGuard)
	@Get("/vendors/name/:id")
	@UseFilters(HttpExceptionFilter)
	getVendors(@Param("id", ParseIntPipe) id: number) {
		return this.eventService.getVendor(id);
	}

	@Post("/bookings")
	@UsePipes(ValidationPipe)
	createEventBookings(
		@Body() eventBookingDto: EventBookingDto,
	): Promise<EventBooking> {
		return this.eventService.createEventBooking(eventBookingDto);
	}

	@Post("/bookings/services")
	@UsePipes(ValidationPipe)
	createBookingServices(
		@Body() eventBookingServicesDto: EventBookingServiceDto[],
	): Promise<EventBookingServices[]> {
		return this.eventService.createEventBookingSrevices(
			eventBookingServicesDto,
		);
	}
}
