import {
	ConflictException,
	HttpException,
	HttpStatus,
	Injectable,
	InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Event } from "src/entities/event.entity";
import { EventType } from "src/entities/event-type.entity";
import { Vendor } from "src/entities/vendor.entity";

@Injectable()
export class EventService {
	constructor(
		@InjectRepository(Event) private eventRepo: Repository<Event>,
		@InjectRepository(EventType) private eventTypeRepo: Repository<EventType>,
		@InjectRepository(Vendor) private vendorRepo: Repository<Vendor>,
	) {}

	/** EventTypes */
	async getEventTypes() {
		return await this.eventTypeRepo.find();
	}

	async getEventVendors(id: number) {
		const vendor = await this.eventRepo.find({
			select: {
				id: true,
				img_url: true,
				total_price: true,
				vendor: {
					name: true,
				},
				eventType: {
					name: true,
				},
			},
			relations: {
				eventType: true,
				vendor: true,
			},
			where: {
				eventType: {
					id: id,
				},
			},
		});

		if (vendor.length === 0) {
			throw new HttpException("No vendor with this id", HttpStatus.BAD_REQUEST);
		}
		return vendor;
	}
	async getEventTypeVendor(id: number) {
		const type = await this.eventTypeRepo.find({
			select: {
				name: true,
			},
			where: {
				id: id,
			},
		});

		if (type.length == 0) {
			throw new HttpException(
				"No eventvendor with this id",
				HttpStatus.BAD_REQUEST,
			);
		}
		return type;
	}

	async getVenue(id: number) {
		const services = await this.eventRepo.find({
			select: {
				id: true,
				vendor: {
					phone: true,
				},
				venue: {
					name: true,
					capacity: true,
					location: true,
				},
			},
			relations: {
				venue: true,
				vendor: true,
			},
			where: {
				id: id,
			},
		});

		if (services.length == 0) {
			throw new HttpException(
				"No vendor services with this id",
				HttpStatus.BAD_REQUEST,
			);
		}
		return services;
	}

	async getServices(id: number) {
		const services = await this.eventRepo.find({
			select: {
				id: true,
				vendor: {
					name: true,
					vendors: {
						name: true,
					},
				},
			},
			relations: {
				vendor: {
					vendors: true,
				},
			},
			where: {
				id: id,
			},
		});

		if (services.length == 0) {
			throw new HttpException(
				"No vendor services with this id",
				HttpStatus.BAD_REQUEST,
			);
		}
		return services;
	}

	async getVendor(id: number) {
		const services = await this.eventRepo.find({
			select: {
				id: true,
				img_url: true,
				vendor: {
					name: true,
				},
			},
			relations: {
				vendor: true,
			},
			where: {
				id: id,
			},
		});

		if (services.length == 0) {
			throw new HttpException(
				"No vendor services with this id",
				HttpStatus.BAD_REQUEST,
			);
		}
		return services;
	}
}
