import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";

export class CreateUserDto {
	@IsNotEmpty()
	firstName: string;

	@IsNotEmpty()
	lastName: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@MinLength(5, {
		message: "Password is too short. Minimal length is $constraint1 characters",
	})
	@MaxLength(50, {
		message: "Password is too long. Maximal length is $constraint1 characters",
	})
	password: string;
}
