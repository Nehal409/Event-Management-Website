import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCardPaymenttDto } from "src/dto/payment.dto";
import { CreditCard } from "src/entities/creditCard.entity";

@Injectable()
export class PaymentService {
	constructor(
		@InjectRepository(CreditCard)
		private cardPaymentRepo: Repository<CreditCard>,
	) {}

	/** Card Payment */
	async cardPayment(createCardPaymentDto: CreateCardPaymenttDto) {
		try {
			return await this.cardPaymentRepo.save(createCardPaymentDto);
		} catch (error) {
			console.log(error);
			throw new InternalServerErrorException();
		}
	}
}
