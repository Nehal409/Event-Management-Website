import { Transform } from "class-transformer";
import { format } from "date-fns";
import {
	IsString,
	IsNotEmpty,
	IsEmail,
	IsDate,
	isDateString,
	IsDateString,
} from "class-validator";

export class BillingDetailsDto {
	@IsString()
	@IsNotEmpty()
	id: string;

	@IsString()
	@IsNotEmpty()
	name: string;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty()
	address: string;

	@IsString()
	@IsNotEmpty()
	phone: string;

	@IsString()
	@IsNotEmpty()
	city: string;

	@IsString()
	@IsNotEmpty()
	cnic: string;

	@IsNotEmpty()
	billingTypeId: string;

	@IsNotEmpty()
	@IsDateString()
	@Transform(({ value }) => new Date(value).toISOString())
	bookingDate: Date;
}
