$(document).ready(function() {
	if(window.location.href.indexOf("ticket") > -1) {
		const purchaseBtn = document.getElementById("purchaseBtn");
		const modalEl = document.querySelector(".modal-content");
		const purchaseEmail = document.getElementById("purchaseEmail");


		function purchaseTicket () {
			modalEl.textContent = `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
			console.log("purchased a ticket");
		}
		purchaseBtn.addEventListener("click", purchaseTicket);
	}
});