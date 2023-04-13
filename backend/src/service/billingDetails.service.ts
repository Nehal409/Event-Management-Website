import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BillingDetails } from "src/entities/billing.entity";
import { CreateBillingDetailsDto } from "src/dto/create-billingDetails.dto";

@Injectable()
export class BillingDetailsService {
	constructor(
		@InjectRepository(BillingDetails)
		private billingRepo: Repository<BillingDetails>,
	) {}

	/** Billing Details Input */
	async createBilling(createBillingDetailsDto: CreateBillingDetailsDto) {
		const billingDetails = this.billingRepo.create(createBillingDetailsDto);
		await this.billingRepo.save(billingDetails);
		return billingDetails;
	}
}
