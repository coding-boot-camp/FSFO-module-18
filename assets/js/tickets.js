require("bootstrap/js/dist/modal");

$(document).ready(function() {
  const purchaseBtn = document.getElementById("purchaseBtn");
  const modalEl = document.querySelector(".modal-content");
  const purchaseEmail = document.getElementById("purchaseEmail");


  function purchaseTicket () {

{/* <div class="modal-header">
              <h5 class="modal-title" id="purchaseModalLabel">Purchase Tickets</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <select class="form-control form-control-lg option1">
                <option>1-Day-Package</option>
                <option>2-Day-Package</option>
                <option>3-Day-Package</option>
              </select>
              <select class="form-control">
                <option>Single</option>
                <option>2 Passes</option>
                <option>3 Passes</option>
              </select>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="purchaseEmail" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Nevermind!</button>
              <button type="button" class="btn btn-primary" id="purchaseBtn">Purchase</button>
            </div>
          </div> */}

          createEl("div", {class: "modal-header"},
            createEl("h5", {class: "modal-title"}, "Thanks!"),
            createEl("button", {class: "close", "data-dismiss": "modal", "aria-label": "Close"})
          )

    modalEl.textContent = `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
    console.log("purchased a ticket");
  }
  purchaseBtn.addEventListener("click", purchaseTicket);

});