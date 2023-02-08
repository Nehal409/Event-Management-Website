import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
	Res,
	Get,
	Req,
	Param,
	ParseIntPipe,
	HttpException,
	HttpStatus,
	UseFilters,
	UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Request, Response } from "express";
import { UserNotFoundException } from "./exceptions/userNotFound.exception";
import { HttpExceptionFilter } from "./filters/httpException.filter";
import { LoginUserDto } from "./dto/login-user.dto";
import { AuthGuard } from "@nestjs/passport";
import { getCurrentUserById } from "src/utils/decorators/get-user-by-id-jwt.decorator";
import { JwtAuthGuard } from "src/utils/guards/jwt-guard.guard";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post("/register")
	@UsePipes(ValidationPipe)
	registerUser(@Body() createUserDto: CreateUserDto) {
		return this.userService.createUser(createUserDto);
		// In db id is adding when an duplicate entry happens
	}

	@Post("/login")
	signinUser(@Body() loginDto: LoginUserDto) {
		return this.userService.signinUser(loginDto);
	}

	/**To guard this endpoint using jwtS */
	@UseGuards(JwtAuthGuard)
	@Get(":id")
	@UseFilters(HttpExceptionFilter)
	getUser(
		@Param("id", ParseIntPipe) id: number,
		@getCurrentUserById() userId: number,
	) {
		/**You can get the info of logged in user  */
		// console.log("id:", userId);
		return this.userService.findUserById(+id);
	}
}
