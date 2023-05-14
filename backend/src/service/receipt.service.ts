import {
	Injectable,
	InternalServerErrorException,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BillingDetails } from "src/entities/billingDetails.entity";
import { User } from "src/entities/user.entity";
import { EventBooking } from "src/entities/eventBooking.entity";
import { ReceiptDto } from "src/dto/receipt.dto";
import { Receipt } from "src/entities/receipt.entity";

@Injectable()
export class ReceiptService {
	constructor(
		@InjectRepository(Receipt)
		private receiptRepo: Repository<Receipt>,
		@InjectRepository(User)
		private userRepo: Repository<User>,
		@InjectRepository(EventBooking)
		private eventBookingRepo: Repository<EventBooking>,
		@InjectRepository(BillingDetails)
		private billingDetailsRepo: Repository<BillingDetails>,
	) {}
	/** Create Receipt */
	async createReceipt(receiptDto: ReceiptDto): Promise<Receipt> {
		const { id, userId, eventBookingId, billingDetailsId } = receiptDto;

		const user = await this.userRepo.findOne({
			where: { id: userId },
		});
		if (!user) {
			throw new NotFoundException(`user with ID ${user} not found`);
		}

		const eventBooking = await this.eventBookingRepo.findOne({
			where: { id: eventBookingId },
		});
		if (!eventBooking) {
			throw new NotFoundException(
				`event booking with ID ${eventBooking} not found`,
			);
		}

		const billingDetails = await this.billingDetailsRepo.findOne({
			where: { id: billingDetailsId },
		});
		if (!billingDetails) {
			throw new NotFoundException(
				`billing details with ID ${billingDetails} not found`,
			);
		}

		try {
			const receipt = new Receipt();
			receipt.id = id;
			receipt.user = user;
			receipt.eventBooking = eventBooking;
			receipt.billingDetails = billingDetails;

			return await this.receiptRepo.save(receipt);
		} catch (error) {
			console.log(error);
			throw new InternalServerErrorException();
		}
	}

	/** Get Booking Details  */
	async getBookingDetails(id: string) {
		const receiptDetails = await this.receiptRepo.find({
			select: {
				id: true,
				eventBooking: {
					id: true,
					selected_slots: true,
					eventBookingService: {
						serviceName: true,
					},
					events: {
						total_price: true,
						vendor: {
							name: true,
							phone: true,
						},
						venue: {
							name: true,
							location: true,
						},
						eventType: {
							name: true,
						},
					},
				},
				billingDetails: {
					id: true,
					name: true,
					email: true,
					cnic: true,
					bookingDate: true,
					billingType: {
						id: true,
						paymentMethod: true,
					},
				},
			},
			relations: {
				eventBooking: {
					eventBookingService: true,
					events: {
						vendor: true,
						venue: true,
						eventType: true,
					},
				},
				billingDetails: {
					billingType: true,
				},
			},
			where: {
				id: id,
			},
		});

		return receiptDetails;
	}

	/** Get Email of the user who is booking the event  */
	async getUserEmail(id: string) {
		const userEmail = await this.receiptRepo.find({
			select: {
				id: true,
				billingDetails: {
					email: true,
				},
			},
			relations: {
				billingDetails: true,
			},
			where: {
				id: id,
			},
		});

		return userEmail;
	}
}
