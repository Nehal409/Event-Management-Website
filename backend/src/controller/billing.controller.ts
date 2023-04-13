import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
} from "@nestjs/common";
import { CreateBillingDetailsDto } from "src/dto/create-billingDetails.dto";
import { BillingDetailsService } from "src/service/billingDetails.service";

@Controller("billing")
export class BillingController {
	constructor(private readonly billingDetailsService: BillingDetailsService) {}

	@Post("/")
	@UsePipes(ValidationPipe)
	billingForm(@Body() createBillingDetailsDto: CreateBillingDetailsDto) {
		return this.billingDetailsService.createBilling(createBillingDetailsDto);
	}
}
