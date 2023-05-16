const billingDetails = JSON.parse(localStorage.getItem("billingDetails"));
const { email } = billingDetails;
console.log(email);
const inputs = document.querySelectorAll("input"),
	button = document.querySelector("button");

// iterate over all inputs
inputs.forEach((input, index1) => {
	input.addEventListener("keyup", e => {
		const currentInput = input,
			nextInput = input.nextElementSibling,
			prevInput = input.previousElementSibling;

		// if the value has more than one character then clear it
		if (currentInput.value.length > 1) {
			currentInput.value = "";
			return;
		}
		// if the next input is disabled and the current value is not empty
		//  enable the next input and focus on it
		if (
			nextInput &&
			nextInput.hasAttribute("disabled") &&
			currentInput.value !== ""
		) {
			nextInput.removeAttribute("disabled");
			nextInput.focus();
		}

		// if the backspace key is pressed
		if (e.key === "Backspace") {
			// iterate over all inputs again
			inputs.forEach((input, index2) => {
				// if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
				// and the previous element exists, set the disabled attribute on the input and focus on the previous element
				if (index1 <= index2 && prevInput) {
					input.setAttribute("disabled", true);
					input.value = "";
					prevInput.focus();
				}
			});
		}
		//if the fourth input( which index number is 3) is not empty and has not disable attribute then
		//add active class if not then remove the active class.
		if (!inputs[3].disabled && inputs[3].value !== "") {
			button.classList.add("active");
			return;
		}
		button.classList.remove("active");
	});
});
//focus the first input which index is 0 on window load
window.addEventListener("load", () => inputs[0].focus());

/** =========== Implementing Apis ============ */

// Function to get access token from localstorage
function getTokenFromLocalStorage() {
	const token = window.localStorage.getItem("my-secret");
	if (token === null) {
		return undefined;
	}
	return token;
}

const id = localStorage.getItem("receiptId");

async function getBookingEmail() {
	// Make API call to get the user email
	const receiptId = id;
	const emailResponse = await axios
		.get(`http://localhost:3000/receipt/email/${receiptId}`, {
			headers: {
				Authorization: `Bearer ${getTokenFromLocalStorage()}`,
			},
		})
		.then(response => {
			document.getElementById("getEmail").innerHTML += `
							A 4-digit verification code has been sent to <b>${response.data[0].billingDetails.email}</b> for
				authentication.`;
		});
}

async function sendConfirmationMessageWithTwilio() {
	// Make API call to get the user email
	const receiptId = id;
	const sendMessage = await axios.get(
		`http://localhost:3000/otp/confirm-booking/message/${receiptId}`,
	);
	console.log(sendMessage);
}

async function generateOtp() {
	// Generate OTP on page load
	window.addEventListener("DOMContentLoaded", async () => {
		// Check if OTP is already generated (to avoid generating OTP repeatedly on page refresh)
		const otpGenerated = localStorage.getItem("otpGenerated");
		if (!otpGenerated) {
			try {
				// Make API call to generate OTP with the retrieved email
				const otpResponse = await axios.post(
					"http://localhost:3000/otp/generate",
					{ email },
				);
				console.log("OTP generated:", otpResponse.data);
				localStorage.setItem("otpGenerated", "true");
			} catch (error) {
				console.error("Failed to generate OTP:", error);
			}
		}
	});
}

getBookingEmail();
generateOtp();

// Verify OTP on button click

const form = document.getElementById("verifyButton");
form.addEventListener("click", async function (e) {
	e.preventDefault();

	const otp1 = document.getElementById("otp1").value;
	const otp2 = document.getElementById("otp2").value;
	const otp3 = document.getElementById("otp3").value;
	const otp4 = document.getElementById("otp4").value;

	const otp = otp1 + otp2 + otp3 + otp4;

	if (otp.length === 4) {
		try {
			const verificationResponse = await axios
				.post("http://localhost:3000/otp/verify", { email, code: otp })
				.then(async response => {
					await showSuccessToast("Booking confirmed! Message sent.");
					await sendConfirmationMessageWithTwilio();
					/** Redirect user to index page */
					window.location.href = "index.html";
				});
		} catch (error) {
			if (error.response.data.message === "Otp not found") {
				showFailureToast("Invalid OTP");
				console.log("Invalid OTP");
			} else if (error.response.data.message === "Otp expired") {
				showFailureToast("OTP Expired");
				console.log("OTP Expired");
			} else {
				showFailureToast("OTP Not Found");
				console.log("OTP Not Found");
			}
		}
	} else {
		showFailureToast("Please enter a valid 4-digit OTP.");
		console.log("Please enter a valid 4-digit OTP.");
	}
});
