import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "db/data-source";

import { UserModule } from "./repository/user.module";

@Module({
	imports: [
		TypeOrmModule.forRoot(dataSourceOptions),
		UserModule,
		ConfigModule.forRoot({
			isGlobal: true,
		}),
	],
})
export class AppModule {}
