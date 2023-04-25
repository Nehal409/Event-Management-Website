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
}