import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
	Get,
	UseFilters,
	ParseIntPipe,
	Param,
	UseGuards,
} from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/filters/httpException.filter";
import { ReceiptDto } from "src/dto/receipt.dto";
import { Receipt } from "src/entities/receipt.entity";
import { ReceiptService } from "src/service/receipt.service";
import { JwtAuthGuard } from "src/utils/guards/jwt-guard.guard";

@Controller("receipt")
export class ReceiptController {
	eventService: any;
	constructor(private readonly receiptService: ReceiptService) {}

	@Post("/")
	@UsePipes(ValidationPipe)
	createReceipt(@Body() receiptDto: ReceiptDto): Promise<Receipt> {
		return this.receiptService.createReceipt(receiptDto);
	}

	@UseGuards(JwtAuthGuard)
	@Get("/details/:id")
	@UseFilters(HttpExceptionFilter)
	getReceiptDetails(@Param("id") id: string) {
		return this.receiptService.getBookingDetails(id);
	}
}
