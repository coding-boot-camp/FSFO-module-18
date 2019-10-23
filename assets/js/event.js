$(document).ready(function() {

const loremIpsum = "Lorem ipsum dolor amet cliche raclette seitan kitsch, dreamcatcher scenester adaptogen biodiesel fashion axe direct trade vexillologist cornhole ethical helvetica. Celiac blue bottle 3 wolf moon paleo hella literally bicycle rights twee shoreditch. Pitchfork chambray raw denim man bun trust fund cray poke cornhole vaporware franzen crucifix pickled godard. Health goth poke poutine freegan swag sartorial iPhone photo booth direct trade kickstarter sustainable gluten-free pitchfork beard before they sold out. Vaporware +1 shabby chic shaman, affogato roof party fingerstache keytar migas la croix. Skateboard listicle food truck, four dollar toast hammock actually raw denim. Tousled gastropub paleo tumeric gentrify. Cold-pressed beard tumeric selfies quinoa plaid. Post-ironic crucifix pour-over +1 narwhal. Tofu everyday carry four dollar toast migas mumblecore gastropub you probably haven't heard of them swag wolf palo santo succulents wayfarers. Celiac chambray fingerstache quinoa. Listicle cronut kale chips tousled kitsch, af quinoa lomo sriracha keytar ugh palo santo vinyl semiotics chia. Beard meh paleo marfa biodiesel authentic seitan squid butcher meggings microdosing schlitz retro. Actually slow-carb twee food truck flexitarian, plaid austin banh mi echo park wayfarers. Mixtape you probably haven't heard of them crucifix banh mi enamel pin art party street art hammock plaid copper mug tousled pinterest letterpress ramps. Cardigan bicycle rights raclette literally, hoodie poutine biodiesel put a bird on it keytar kitsch chillwave cray single-origin coffee hot chicken selfies. Microdosing lo-fi before they sold out pork belly, kickstarter man bun fixie tote bag lyft umami 3 wolf moon. Ramps whatever waistcoat normcore sriracha helvetica migas. Brooklyn fanny pack humblebrag disrupt mustache YOLO waistcoat iPhone whatever."

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