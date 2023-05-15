require("dotenv").config();
import {
	HttpException,
	HttpStatus,
	Injectable,
	InternalServerErrorException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OTP } from "src/entities/otp.entity";
import * as nodemailer from "nodemailer";

@Injectable()
export class OTPService {
	constructor(@InjectRepository(OTP) private otpRepo: Repository<OTP>) {}

	/** OTP Generation and Verification */
	async generateOTP(email: string): Promise<OTP> {
		const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
		const otp = this.otpRepo.create({ code: otpCode, email });

		// Set the expire date for the OTP
		const expireDate = new Date();
		expireDate.setMinutes(expireDate.getMinutes() + 5); // Set expiration time to 5 minutes from now
		otp.expireDate = expireDate;
		try {
			// // Send OTP to the user's email
			const transporter = nodemailer.createTransport({
				// Configure your email provider details here
				service: process.env.SERVICE,
				auth: {
					user: process.env.EMAIL_SENDER,
					pass: process.env.EMAIL_PASSWORD,
				},
			});

			const mailOptions = {
				from: process.env.EMAIL_SENDER,
				to: email,
				subject: "OTP Verification",
				text: `Your OTP code is: ${otp.code}`,
			};

			await transporter.sendMail(mailOptions);
			return this.otpRepo.save(otp);
		} catch (error) {
			console.error("OTP sending failed:", error);
			throw new Error("OTP sending failed.");
		}
	}

	async verifyOTP(email: string, code: string): Promise<string> {
		const otp = await this.otpRepo.findOne({ where: { email, code } });
		if (!otp) {
			throw new HttpException("Otp not found", HttpStatus.BAD_REQUEST);
		}
		const currentDate = new Date();
		if (currentDate > otp.expireDate) {
			throw new HttpException("Otp expired", HttpStatus.BAD_REQUEST);
		}
		if (otp.code !== code) {
			// when otp is found in database but does not match the email
			throw new HttpException("Invalid OTP", HttpStatus.BAD_REQUEST);
		} else {
			return "Otp is valid";
		}
	}
}
