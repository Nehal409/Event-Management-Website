import {
	IsEmail,
	IsNotEmpty,
	MinLength,
	MaxLength,
	IsPhoneNumber,
} from "class-validator";

export class CreateBillingDetailsDto {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	address: string;

	@IsNotEmpty()
	@IsPhoneNumber("PK")
	phone: string;

	@IsNotEmpty()
	city: string;

	@IsNotEmpty()
	cnicNumber: string;
}
