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

import { EventService } from "src/service/event.service";
import { JwtAuthGuard } from "src/utils/guards/jwt-guard.guard";

@Controller("events")
export class EventController {
	constructor(private readonly eventService: EventService) {}
	/** homepage  */
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
	getEventTyprVendor(@Param("id", ParseIntPipe) id: number) {
		return this.eventService.getEventTypeVendor(id);
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
}
