import {
	ConflictException,
	HttpException,
	HttpStatus,
	Injectable,
	InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ContactForm } from "src/entities/contact.entity";
import { CreateContactDto } from "src/dto/create-contact.dto";

@Injectable()
export class ContactService {
	constructor(
		@InjectRepository(ContactForm) private contactRepo: Repository<ContactForm>,
	) {}

	/** User Registration */
	async createContact(createContactDto: CreateContactDto) {
		try {
			return await this.contactRepo.save(createContactDto);
		} catch (error) {
			console.log(error);
			throw new InternalServerErrorException();
		}
	}
}
