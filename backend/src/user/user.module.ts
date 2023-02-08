import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
	imports: [
		TypeOrmModule.forFeature([User]),
		JwtModule.register({
			secret: "my-secret",
		}),
	],
	controllers: [UserController],
	providers: [UserService, JwtStrategy],
})
export class UserModule {}
