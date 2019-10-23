const createEl = require("./domMethods");

$(document).ready(function() {

  if (window.location.href.indexOf("event") > -1) {
    var currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    };
    
    var pageEl = document.querySelector("#page");
    
    var containerEl = createEl("div", {class: "container"},
      createEl("div", {class: "card mb-3"}, 
        createEl("img", {class: "card-img-top", style: "width: 5px", src: currentEvent.image || "https://via.placeholder.com/350x150"}),
        createEl("div", {class: "card-body"}, 
          createEl("h1", {class: "card-title"}, currentEvent.title || ""),
          createEl("h2", {class: "text-muted"}, currentEvent.subtitle || ""),
          createEl("p", {class: "card-text mt-3"}, currentEvent.description || loremIpsum),
          createEl("a", {class: "btn btn-primary", href: "tickets.html"}, "Buy Tickets")
        )
      ),
      
    )
    pageEl.appendChild(containerEl)
  }
});