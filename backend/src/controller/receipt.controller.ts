import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
} from "@nestjs/common";
import { ReceiptDto } from "src/dto/receipt.dto";
import { Receipt } from "src/entities/receipt.entity";
import { ReceiptService } from "src/service/receipt.service";

@Controller("receipt")
export class ReceiptController {
	constructor(private readonly receiptService: ReceiptService) {}

	@Post("/")
	@UsePipes(ValidationPipe)
	createReceipt(@Body() receiptDto: ReceiptDto): Promise<Receipt> {
		return this.receiptService.createReceipt(receiptDto);
	}
}
