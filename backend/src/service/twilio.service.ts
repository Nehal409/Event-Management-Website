require("dotenv").config();
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Receipt } from "src/entities/receipt.entity";
import * as twilio from "twilio";
import { Repository } from "typeorm";

@Injectable()
export class TwilioService {
	private readonly client: twilio.Twilio;

	constructor(
		@InjectRepository(Receipt)
		private receiptRepo: Repository<Receipt>,
	) {
		this.client = twilio(
			process.env.TWILIO_ACCOUNT_SID,
			process.env.TWILIO_AUTH_TOKEN,
		);
	}

	async sendMessage(id: string) {
		try {
			const userinfo = await this.receiptRepo.find({
				select: {
					billingDetails: {
						phone: true,
						name: true,
						bookingDate: true,
					},
					eventBooking: {
						selected_slots: true,
					},
				},
				relations: {
					billingDetails: true,
					eventBooking: true,
				},
				where: {
					id: id,
				},
			});

			if (userinfo.length === 0) {
				throw new Error("User info not found");
			}

			const { name, phone, bookingDate } = userinfo[0].billingDetails;
			const { selected_slots } = userinfo[0].eventBooking;
			const formattedPhone = phone.replace(/^0/, "+92");

			await this.client.messages.create({
				body: `Hey there, ${name}! We're thrilled to inform you that your event booking has been successfully confirmed for ${bookingDate} during the ${selected_slots} slot. We look forward to seeing you there!`,
				from: process.env.TWILIO_PHONE_NUMBER,
				to: formattedPhone,
			});

			return "message sent successfully";
		} catch (error) {
			// Handle the error
			console.error("Error sending message:", error);
			throw new Error("Failed to send message");
		}
	}
}
