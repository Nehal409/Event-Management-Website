function showFailureToast(message) {
	const toasts = document.querySelector(".toastFailure");
	const closeIcons = document.querySelector(".closes");
	const progresss = document.querySelector(".progresss");
	const textElements = document.getElementById("texts");

	let timers1, timers2;

	toasts.classList.add("active");
	progresss.classList.add("active");

	timers1 = setTimeout(() => {
		toasts.classList.remove("active");
	}, 5000); //1s = 1000 milliseconds

	timers2 = setTimeout(() => {
		progresss.classList.remove("active");
	}, 5300);

	closeIcons.addEventListener("click", () => {
		toasts.classList.remove("active");

		setTimeout(() => {
			progresss.classList.remove("active");
		}, 300);

		clearTimeout(timers1);
		clearTimeout(timers2);
	});

	// Set the text content of the element
	textElements.innerHTML = message;
}
