window.localStorage.removeItem("otpGenerated");

// Function to get access token from localstorage
function getTokenFromLocalStorage() {
	const token = window.localStorage.getItem("my-secret");
	if (token === null) {
		return undefined;
	}
	return token;
}
if (localStorage.getItem("creditCardDetails")) {
	/** Seeting localstorage */
	let getCrcId = JSON.parse(localStorage.getItem("creditCardDetails"));
	let crcId = getCrcId.id;

	// Retrieve existing payment data from localStorage
	let addCrcIdToBillingType = JSON.parse(localStorage.getItem("billingType"));

	// Add a new property to the object
	addCrcIdToBillingType.crcId = crcId;

	// Convert the updated object back to JSON string
	let updatedBillingType = JSON.stringify(addCrcIdToBillingType);

	// Save the updated string to localStorage
	localStorage.setItem("billingType", updatedBillingType);
}

const userId = JSON.parse(localStorage.getItem("userId"));
const eventBooking = JSON.parse(localStorage.getItem("eventBooking"));
const billingDetails = JSON.parse(localStorage.getItem("billingDetails"));

// Setting Receipt localstorage
const receiptid =
	Date.now().toString(36) + Math.random().toString(36).substr(2);

const receiptData = {
	id: receiptid,
	userId: userId,
	eventBookingId: eventBooking.id,
	billingDetailsId: billingDetails.id,
};

localStorage.setItem("Receipt", JSON.stringify(receiptData));

async function getBookingDetails(receiptId) {
	try {
		const response = await axios.get(
			`http://localhost:3000/receipt/details/${receiptId}`,
			{
				headers: {
					Authorization: `Bearer ${getTokenFromLocalStorage()}`,
				},
			},
		);
		const services = response.data[0].eventBooking.eventBookingService;
		const serviceNames = services.map(service => service.serviceName);
		const serviceNamesString = serviceNames.join(", ");
		console.log(serviceNamesString);

		document.getElementById("bookingDetails").innerHTML += `
                                    <div class="sub-content">
                        <h4><span>Hello, ${response.data[0].billingDetails.name}</span></h4>
                        <h4>
                            Please take a moment to review your booking prior to confirming.
                        </h4>
                    </div>
    
                    <div class="sub-content-2">
                        <div class="details">
                            <h2>Event Details</h2>
                            <table>
                                <tr>
                                    <td>Event Type:</td>
                                    <td>${response.data[0].eventBooking.events.eventType.name}</td>
                                </tr>
                                <tr>
                                    <td>Vendor Name:</td>
                                    <td>${response.data[0].eventBooking.events.vendor.name}</td>
                                </tr>
                                <tr>
                                    <td>Vendor Phone:</td>
                                    <td>${response.data[0].eventBooking.events.vendor.phone}</td>
                                </tr>
                            </table>
                        </div>
    
                        <div class="details">
                            <h2>User Details</h2>
                            <table>
                                <tr>
                                    <td>User Name:</td>
                                    <td>${response.data[0].billingDetails.name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>${response.data[0].billingDetails.email}</td>
                                </tr>
                                <tr>
                                    <td>CNIC Number:</td>
                                    <td>${response.data[0].billingDetails.cnic}</td>
                                </tr>
                            </table>
                        </div>
    
                        <div class="details">
                             <h2>Selected Services</h2>
                             <table>
                                 <tr>
                                    <td>${serviceNamesString}</td>		
                                </tr>                 
                             </table>
                        </div>
    
    
                        <div class="details">
                            <h2>Event Venue</h2>
                            <table>
                                <tr>
                                    <td>Venue Name:</td>
                                    <td>${response.data[0].eventBooking.events.venue.name}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>${response.data[0].eventBooking.events.venue.location}</td>
                                </tr>
                            </table>
                        </div>
    
                        <div class="details">
                            <h2>Event Slot</h2>
                            <table>
                                <tr>
                                    <td>Selected Slot:</td>
                                    <td>${response.data[0].eventBooking.selected_slots}</td>
                                </tr>
                                <tr>
                                    <td>Selected Date:</td>
                                    <td>${response.data[0].billingDetails.bookingDate}</td>
                                </tr>
                            </table>
                        </div>
    
                        <div class="details">
                            <h2>Payment Details</h2>
                            <table>
                                <tr>
                                    <td>Payment Method:</td>
                                    <td>${response.data[0].billingDetails.billingType.paymentMethod}</td>
                                </tr>
                                <tr>
                                    <td>Total Amount:</td>
                                    <td>Rs. ${response.data[0].eventBooking.events.total_price}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    `;
	} catch (error) {
		console.log(error);
	}
}

let receiptId =
	localStorage.getItem("receiptId"); /** Getting data from localstorage to db */
async function saveBookingDetails() {
	const requestsMade = localStorage.getItem("requestsMade");

	if (!requestsMade) {
		// For EventBooking
		async function saveEventBooking() {
			const { id, eventId, slot } = eventBooking;
			try {
				await axios.post("http://localhost:3000/events/bookings", {
					id,
					selected_slots: slot,
					eventsId: eventId,
				});
				console.log("Event booking saved successfully");
			} catch (error) {
				console.error("Error saving event booking:", error.message);
			}
		}

		// For EventBookingServices
		const eventBookingServices = JSON.parse(
			localStorage.getItem("eventBookingServices"),
		);
		async function saveEventBookingServices() {
			try {
				const servicesToSave = eventBookingServices.map(service => ({
					id: service.id,
					serviceName: service.serviceName,
					eventBookingId: service.eventBookingId,
				}));
				await axios.post(
					"http://localhost:3000/events/bookings/services",
					servicesToSave,
				);

				console.log("Event booking services saved successfully");
			} catch (error) {
				console.error("Error saving event booking services:", error.message);
			}
		}

		// For CreditCardCredentials
		let getCreditCardCredentials = JSON.parse(
			localStorage.getItem("creditCardDetails"),
		);
		async function saveCreditCard() {
			const { id, name, expiry_year, expiry_month, cvv, credit_card_number } =
				getCreditCardCredentials;
			try {
				await axios.post("http://localhost:3000/payment/card", {
					id,
					creditCardNumber: credit_card_number,
					nameOnCard: name,
					expMonth: expiry_month,
					expYear: expiry_year,
					cvv: cvv,
				});
				console.log("Credit card credentials saved successfully");
			} catch (error) {
				console.error("Error saving credit card credentials:", error.message);
			}
		}

		// For BillngType
		let getBillingType = JSON.parse(localStorage.getItem("billingType"));
		async function saveBillingType() {
			const { id, value, crcId } = getBillingType || {};

			try {
				if (crcId) {
					await axios.post("http://localhost:3000/billing/types", {
						id,
						paymentMethod: value,
						creditCardId: crcId,
					});
				} else {
					await axios.post("http://localhost:3000/billing/types", {
						id,
						paymentMethod: value,
					});
				}
				console.log("Billing Type saved successfully");
			} catch (error) {
				console.error("Error saving Billing Type:", error.message);
			}
		}

		// For BillingDetails
		async function saveBillingDetails() {
			const {
				id,
				address,
				city,
				cnic,
				email,
				name,
				phone,
				billingTypeId,
				bookingDate,
			} = billingDetails;
			try {
				await axios.post("http://localhost:3000/billing/details", {
					id,
					name: name,
					email: email,
					address: address,
					phone: phone,
					city: city,
					cnic: cnic,
					bookingDate: bookingDate,
					billingTypeId: billingTypeId,
				});
				console.log("Billing Details saved successfully");
			} catch (error) {
				console.error("Error saving Billing Details:", error.message);
			}
		}

		// For Receipt
		const Receipt = JSON.parse(localStorage.getItem("Receipt"));
		// Assign the value to the global receiptId variable
		if (!receiptId) {
			// If receiptId is not already stored, assign it and store in localStorage
			receiptId = Receipt.id;
			localStorage.setItem("receiptId", receiptId);
		}
		async function saveReceipt() {
			const { id, billingDetailsId, eventBookingId, userId } = Receipt;
			try {
				await axios.post("http://localhost:3000/receipt/", {
					id,
					userId: userId,
					eventBookingId: eventBookingId,
					billingDetailsId: billingDetailsId,
				});
				const Receipt = JSON.parse(localStorage.getItem("Receipt"));

				console.log("Receipt data saved successfully");
			} catch (error) {
				console.error("Error saving Receipt data:", error.message);
			}
		}

		await saveEventBooking();
		await saveEventBookingServices();
		if (localStorage.getItem("creditCardDetails")) {
			await saveCreditCard();
		}
		await saveBillingType();
		await saveBillingDetails();
		await saveReceipt();

		// Set the flag indicating that the requests have been made
		localStorage.setItem("requestsMade", true);
	}

	await getBookingDetails(receiptId);
}

saveBookingDetails();

/** If the confirm booking is clicked go to otp */
const confirmButton = document.getElementById("save_button");
confirmButton.addEventListener("click", function () {
	setTimeout(function () {
		window.location.href = "otpVerification.html";
	}, 50);
});

/** If the cancel booking is clicked go to otp */
const cancelButton = document.getElementById("cancel_button");
cancelButton.addEventListener("click", function () {
	setTimeout(function () {
		window.location.href = "billingDetails.html";
	}, 50);
});
