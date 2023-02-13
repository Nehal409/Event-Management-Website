import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";

export class CreateContactDto {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	phone: string;

	@IsNotEmpty()
	subject: string;

	@IsNotEmpty()
	message: string;
}
