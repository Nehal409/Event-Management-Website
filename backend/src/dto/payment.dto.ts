import { IsNotEmpty } from "class-validator";

export class CreateCardPaymenttDto {
	@IsNotEmpty()
	id: string;

	@IsNotEmpty()
	creditCardNumber: string;

	@IsNotEmpty()
	nameOnCard: string;

	@IsNotEmpty()
	expMonth: string;

	@IsNotEmpty()
	expYear: string;

	@IsNotEmpty()
	cvv: string;
}
