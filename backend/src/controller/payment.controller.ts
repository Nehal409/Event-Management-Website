import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
} from "@nestjs/common";
import { CreateCardPaymenttDto } from "src/dto/payment.dto";
import { PaymentService } from "src/service/payment.service";

@Controller("payment")
export class CardPaymentController {
	constructor(private readonly paymentService: PaymentService) {}

	@Post("/card")
	@UsePipes(ValidationPipe)
	contactForm(@Body() createCardPaymenttDto: CreateCardPaymenttDto) {
		return this.paymentService.cardPayment(createCardPaymenttDto);
	}
}
