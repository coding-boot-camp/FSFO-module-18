$(document).ready(function() {
  const loremIpsum = "Lorem ipsum dolor amet cliche raclette seitan kitsch, dreamcatcher scenester adaptogen biodiesel fashion axe direct trade vexillologist cornhole ethical helvetica. Celiac blue bottle 3 wolf moon paleo hella literally bicycle rights twee shoreditch. Pitchfork chambray raw denim man bun trust fund cray poke cornhole vaporware franzen crucifix pickled godard. Health goth poke poutine freegan swag sartorial iPhone photo booth direct trade kickstarter sustainable gluten-free pitchfork beard before they sold out. Vaporware +1 shabby chic shaman, affogato roof party fingerstache keytar migas la croix. Skateboard listicle food truck, four dollar toast hammock actually raw denim. Tousled gastropub paleo tumeric gentrify. Cold-pressed beard tumeric selfies quinoa plaid. Post-ironic crucifix pour-over +1 narwhal. Tofu everyday carry four dollar toast migas mumblecore gastropub you probably haven't heard of them swag wolf palo santo succulents wayfarers. Celiac chambray fingerstache quinoa. Listicle cronut kale chips tousled kitsch, af quinoa lomo sriracha keytar ugh palo santo vinyl semiotics chia. Beard meh paleo marfa biodiesel authentic seitan squid butcher meggings microdosing schlitz retro. Actually slow-carb twee food truck flexitarian, plaid austin banh mi echo park wayfarers. Mixtape you probably haven't heard of them crucifix banh mi enamel pin art party street art hammock plaid copper mug tousled pinterest letterpress ramps. Cardigan bicycle rights raclette literally, hoodie poutine biodiesel put a bird on it keytar kitsch chillwave cray single-origin coffee hot chicken selfies. Microdosing lo-fi before they sold out pork belly, kickstarter man bun fixie tote bag lyft umami 3 wolf moon. Ramps whatever waistcoat normcore sriracha helvetica migas. Brooklyn fanny pack humblebrag disrupt mustache YOLO waistcoat iPhone whatever."

  // SCHEDULE PAGE
  if(window.location.href.indexOf("schedule") > -1) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* initialize the external events
    -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function() {

      // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
      // it doesn't need to have a start or end
      var eventObject = {
        title: $.trim($(this).text()) // use the element's text as the event title
      };

      // store the Event Object in the DOM element so we can get to it later
      $(this).data('eventObject', eventObject);

      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });

    });


    /* initialize the calendar
    -----------------------------------------------------------------*/

    var calendar =  $('#calendar').fullCalendar({
      header: {
        left: 'title',
        center: 'agendaDay,agendaWeek,month',
        right: 'prev,next today'
      },
      editable: true,
      firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
      selectable: true,
      defaultView: 'month',

      axisFormat: 'h:mm',
      columnFormat: {
                month: 'ddd',    // Mon
                week: 'ddd d', // Mon 7
                day: 'dddd M/d',  // Monday 9/7
                agendaDay: 'dddd d'
            },
            titleFormat: {
                month: 'MMMM yyyy', // September 2009
                week: "MMMM yyyy", // September 2009
                day: 'MMMM yyyy'                  // Tuesday, Sep 8, 2009
            },
      allDaySlot: false,
      selectHelper: true,
      eventClick: function(calEvent) {

        function dateConverter(UNIX_timestamp){
          var a = new Date(UNIX_timestamp);
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          var year = a.getFullYear();
          var month = months[a.getMonth()];
          var date = a.getDate();
          var result =  month + ' ' + date + ', ' + year 
          return result;
        }
        const start = dateConverter(calEvent.start);

        localStorage.setItem("currentEvent", JSON.stringify({
          title: calEvent.title,
          subtitle: start,
          description: calEvent.description,
          image: calEvent.image
        }))
        window.location.href = "events.html"
      },
      
      droppable: true, // this allows things to be dropped onto the calendar !!!
      drop: function(date, allDay) { // this function is called when something is dropped

        // retrieve the dropped element's stored Event Object
        var originalEventObject = $(this).data('eventObject');

        // we need to copy it, so that multiple events don't have a reference to the same object
        var copiedEventObject = $.extend({}, originalEventObject);

        // assign it the date that was reported
        copiedEventObject.start = date;
        copiedEventObject.allDay = allDay;

        // render the event on the calendar
        // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }

      },

      events: [
        {
          title: 'Vegan Day',
          start: new Date(y, m, 1),
          description: `Vegans unite! At this event, we'll be celebrating with vegan food from around the globe. With so many delicious vegan cuisine options, it's hard to pick one. What are you hungry for? Let us share with you!
          Veganism is a lifestyle choice—we're passionate about creating healthy and delicious food products without harming the environment, so please spread the word about our festival and about our work!
          Our goal is to share the incredible vegan food we've discovered in cities around the world! With so much delicious food and creative ideas on the horizon, it's time to celebrate and share the best vegan foods around the world.
          We'll be bringing together all types of vegan food that's delicious regardless of where you are! Whether you're looking for a quick meal for lunch and dinner, an elaborate meal on the go, or just a great bowl of vegan soup for a special occasion, we invite you to be a part of something bigger than anything you've ever seen.`,
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        },
        {
          id: 999,
          title: 'Harvest Festival',
          start: new Date(y, m, d+4, 16, 0),
          allDay: false,
          className: 'info',
          image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        },
        {
          title: 'Bacon Day',
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 20, 0),
          description: `Today's all about bacon! We'll be serving up the best tasting bacon around town! Let's all get excited about bacon together!
          As an appetizer, grab a side of our delicious BBQ pulled pork and pick up a delicious side of our homemade slaw and sauce! Then, choose from our bacon and egg rolls, our crispy bacon strips, or even our bacon-wrapped pretzel rolls. You decide!
          And when it's time to order, you can't help but order our homemade chipotle queso dip that uses bacon to make it a little healthier. (No kidding.)          
          We can't wait to see you!`,
          image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
          allDay: false,
          className: 'important'
        },
        {
          title: 'Grub it up!',
          start: new Date(y, m, d+1, 19, 0),
          end: new Date(y, m, d+1, 22, 30),
          allDay: false,
          image: "https://images.unsplash.com/photo-1534797258760-1bd2cc95a5bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        },
      ],
    });
  }
// END SCHEDULE PAGE

// EVENT PAGE
  if (window.location.href.indexOf("event") > -1) {

    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
      title: "Title Placeholder",
      subtitle: "",
      description: ""
    };

    console.log(currentEvent)


    const pageEl = document.querySelector("#page");

    function createEl(htmlString, attrs, ...children) {
      if (typeof htmlString !== "string") {
        throw Error("Argument 'htmlString' is required and must be a string");
      }

      const el = document.createElement(htmlString);

      if (typeof attrs === "object") {
        for (let key in attrs) {
          if (key.substring(0, 2) === "on") {
            el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
          } else if (key === "style") {
            for (let rule in attrs[key]) {
              el.style[rule] = attrs[key][rule];
            }
          } else {
            el.setAttribute(key, attrs[key]);
          }
        }
      }

      children.forEach(function(child) {
        let node;

        if (child.constructor.name.includes("Element")) {
          node = child;
        } else {
          node = document.createTextNode(child);
        }

        el.appendChild(node);
      });

      return el;
    }

    const containerEl = createEl("div", {class: "container"},
      createEl("div", {class: "card mb-3"}, 
        createEl("img", {class: "card-img-top", style: "width: 5px", src: currentEvent.image || "https://via.placeholder.com/350x150"}),
        createEl("div", {class: "card-body"}, 
          createEl("h1", {class: "card-title"}, currentEvent.title || ""),
          createEl("h2", {class: "card-subtitle"}, currentEvent.subtitle || ""),
          createEl("p", {class: "card-text"}, currentEvent.description || loremIpsum),
          createEl("a", {class: "btn btn-primary", href: "tickets.html"}, "Buy Tickets")
        )
      ),
      
    )
    pageEl.appendChild(containerEl)
  }

  // TICKET PAGE
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
})
