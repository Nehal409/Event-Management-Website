import {
	Controller,
	Post,
	Get,
	Body,
	HttpException,
	HttpStatus,
	Param,
} from "@nestjs/common";
import { OTPDto, VerifyOTPDto } from "src/dto/otp.dto";
import { OTP } from "src/entities/otp.entity";
import { OTPService } from "src/service/otp.service";
import { TwilioService } from "src/service/twilio.service";

@Controller("otp")
export class OTPController {
	constructor(
		private readonly otpService: OTPService,
		private readonly twilioService: TwilioService,
	) {}

	@Post("/generate")
	async generateOTP(@Body() otpDto: OTPDto): Promise<OTP> {
		const { email } = otpDto;
		return await this.otpService.generateOTP(email);
	}
	@Post("/verify")
	async verifyOTP(@Body() verifyOTPDto: VerifyOTPDto) {
		const { email, code } = verifyOTPDto;
		const result = await this.otpService.verifyOTP(email, code);
		return result;
	}

	/** Twilio message api */
	@Get("/confirm-booking/message/:id")
	async sendEventNotification(@Param("id") id: string) {
		return await this.twilioService.sendMessage(id);
	}
}
