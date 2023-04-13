import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "db/data-source";

import { IndexModule } from "./repository/index.module";

@Module({
	imports: [
		TypeOrmModule.forRoot(dataSourceOptions),
		IndexModule,
		ConfigModule.forRoot({
			isGlobal: true,
		}),
	],
})
export class AppModule {}
