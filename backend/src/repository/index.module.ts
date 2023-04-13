require("dotenv").config();
import { Module } from "@nestjs/common";
import { UserService } from "../service/user.service";
import { UserController } from "../controller/user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../strategy/jwt.strategy";
import { ContactForm } from "src/entities/contact.entity";
import { ContactService } from "src/service/contact.service";
import { ContactController } from "src/controller/contact.controller";
import { Venue } from "src/entities/venue.entity";
import { EventType } from "src/entities/event-type.entity";
import { Vendor } from "src/entities/vendor.entity";
import { Event } from "src/entities/event.entity";
import { EventController } from "src/controller/event.controller";
import { EventService } from "src/service/event.service";
import { Service } from "src/entities/services.entity";
import { BillingDetails } from "src/entities/billing.entity";
import { BillingController } from "src/controller/billing.controller";
import { BillingDetailsService } from "src/service/billingDetails.service";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			User,
			ContactForm,
			Venue,
			EventType,
			Vendor,
			Event,
			Service,
			BillingDetails,
		]),
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: "1200s" },
		}),
	],
	controllers: [
		UserController,
		ContactController,
		EventController,
		BillingController,
	],
	providers: [
		UserService,
		ContactService,
		EventService,
		BillingDetailsService,
		JwtStrategy,
	],
})
export class IndexModule {}