import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
} from "@nestjs/common";
import { CreateContactDto } from "src/dto/create-contact.dto";
import { ContactService } from "src/service/contact.service";

@Controller("contact")
export class ContactController {
	constructor(private readonly contactService: ContactService) {}

	@Post("/")
	@UsePipes(ValidationPipe)
	contactForm(@Body() createContactDto: CreateContactDto) {
		return this.contactService.createContact(createContactDto);
	}
}
