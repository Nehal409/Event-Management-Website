import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
} from "@nestjs/common";
import { BillingDetailsDto } from "src/dto/billingDetails.dto";
import { BillingTypeDto } from "src/dto/billingType.dto";
import { BillingDetails } from "src/entities/billingDetails.entity";
import { BillingType } from "src/entities/billingType.entity";
import { BillingService } from "src/service/billing.service";

@Controller("billing")
export class BillingController {
	constructor(private readonly billingService: BillingService) {}

	@Post("/types")
	@UsePipes(ValidationPipe)
	createBillingType(
		@Body() billingTypeDto: BillingTypeDto,
	): Promise<BillingType> {
		return this.billingService.createBillingType(billingTypeDto);
	}

	@Post("/details")
	@UsePipes(ValidationPipe)
	createBillingDetails(
		@Body() billingDetailsDto: BillingDetailsDto,
	): Promise<BillingDetails> {
		return this.billingService.createBillingDetails(billingDetailsDto);
	}
}
