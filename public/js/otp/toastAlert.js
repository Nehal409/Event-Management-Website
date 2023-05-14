function showSuccessToast(message) {
	const toast = document.querySelector(".toast");
	const closeIcon = document.querySelector(".close");
	const progress = document.querySelector(".progress");
	const textElement = document.getElementById("text");

	let timer1, timer2;

	toast.classList.add("active");
	progress.classList.add("active");

	timer1 = setTimeout(() => {
		toast.classList.remove("active");
	}, 5000); //1s = 1000 milliseconds

	timer2 = setTimeout(() => {
		progress.classList.remove("active");
	}, 5300);

	closeIcon.addEventListener("click", () => {
		toast.classList.remove("active");

		setTimeout(() => {
			progress.classList.remove("active");
		}, 300);

		clearTimeout(timer1);
		clearTimeout(timer2);
	});

	// Set the text content of the element
	textElement.innerHTML = message;
}
