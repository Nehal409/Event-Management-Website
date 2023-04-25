import {
	Injectable,
	InternalServerErrorException,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BillingType } from "src/entities/billingType.entity";
import { BillingTypeDto } from "src/dto/billingType.dto";
import { CreditCard } from "src/entities/creditCard.entity";
import { BillingDetails } from "src/entities/billingDetails.entity";
import { BillingDetailsDto } from "src/dto/billingDetails.dto";

@Injectable()
export class BillingService {
	constructor(
		@InjectRepository(BillingType)
		private billingTypeRepo: Repository<BillingType>,
		@InjectRepository(CreditCard)
		private creditCardRepo: Repository<CreditCard>,
		@InjectRepository(BillingDetails)
		private billingDetailsRepo: Repository<BillingDetails>,
	) {}

	/** Billing Type*/
	async createBillingType(
		billingTypeDto: BillingTypeDto,
	): Promise<BillingType> {
		const { id, paymentMethod, creditCardId } = billingTypeDto;
		let creditCard = null;

		// Fetch the creditCard entity from the database if creditCardId is present in the DTO
		if (creditCardId) {
			creditCard = await this.creditCardRepo.findOne({
				where: { id: creditCardId },
			});
			if (!creditCard) {
				throw new NotFoundException(
					`Credit card with ID ${creditCardId} not found`,
				);
			}
		}

		try {
			const billingType = new BillingType();
			billingType.id = id;
			billingType.paymentMethod = paymentMethod;
			billingType.creditCard = creditCard;

			return await this.billingTypeRepo.save(billingType);
		} catch (error) {
			console.log(error);
			throw new InternalServerErrorException();
		}
	}

	/** Billing Details*/
	async createBillingDetails(
		billingDetailsDto: BillingDetailsDto,
	): Promise<BillingDetails> {
		const { id, name, email, address, phone, city, cnic, billingTypeId } =
			billingDetailsDto;

		const billingType = await this.billingTypeRepo.findOne({
			where: { id: billingTypeId },
		});
		if (!billingType) {
			throw new NotFoundException(
				`billing type with ID ${billingType} not found`,
			);
		}

		try {
			const billingDetails = new BillingDetails();
			billingDetails.id = id;
			billingDetails.name = name;
			billingDetails.email = email;
			billingDetails.address = address;
			billingDetails.phone = phone;
			billingDetails.city = city;
			billingDetails.cnic = cnic;
			billingDetails.billingType = billingType;

			return await this.billingDetailsRepo.save(billingDetails);
		} catch (error) {
			console.log(error);
			throw new InternalServerErrorException();
		}
	}
}
