import {
	ConflictException,
	HttpException,
	HttpStatus,
	Injectable,
	InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";
import { comparePassword, encodePassword } from "src/utils/bcrypt";
import { LoginUserDto } from "./dto/login-user.dto";
import { UserNotFoundException } from "./exceptions/userNotFound.exception";
import { JwtService } from "@nestjs/jwt";

const saltOrRounds = 10;

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private userRepo: Repository<User>,
		private jwtService: JwtService,
	) {}

	/** User Registration */
	async createUser(createUserDto: CreateUserDto) {
		const password = encodePassword(createUserDto.password);
		const newUser = this.userRepo.create({ ...createUserDto, password });
		try {
			
			return await this.userRepo.save(newUser);
		} catch (error) {
			if (error.code === "ER_DUP_ENTRY") {
				throw new ConflictException("Email already exists");
			} else {
				throw new InternalServerErrorException();
			}
		}
	}

	async signinUser({ email, password }: LoginUserDto) {
		const user = await this.userRepo.findOne({ where: { email } });
		if (!user) {
			throw new HttpException("User not found", HttpStatus.UNAUTHORIZED);
		}

		const areEqual = await comparePassword(password, user.password);

		if (!areEqual) {
			throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
		}
		console.log(user);

		return this.jwtUser(user.id, user.email);
	}

	jwtUser(userId: number, email: string) {
		return this.jwtService.sign({
			sub: userId,
			email,
		});
	}

	/** Get User */
	async findUserById(id: number) {
		const user = await this.userRepo.findOneBy({ id });

		if (!user) {
			throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
		}
		return user;
	}
}
