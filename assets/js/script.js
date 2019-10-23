import 'bootstrap/js/dist/carousel';

$(document).ready(function() {

  const carouselSlides = [
    {
      title: "hi",
      subtitle: "hello",
      img: "../img/chips.jpg"
    },
    {
      title: "",
      subtitle: "",
      img: ""
    },
    {
      title: "",
      subtitle: "",
      img: ""
    }
  ]
  $("#carousel-container").html(`
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div id="carousel-slide-container" class="carousel-inner" role="complementary">    
    <div id="carousel-item-1" class="carousel-item fullscreen-carousel">
      <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
          <div class="container">
            <div class="row align-items-center justify-content-center">
                <h2 class="display-4 mb-2">We travel all over the US</h2>
            </div>
            <div class="row align-items-center justify-content-center"> 
              <h3>Check out our schedule!</h3>
            </div>
            <div class=" mt-4 row align-items-center justify-content-center"> 
              <a class="btn btn-primary" href="schedule.html">
                  View Schedule
              </a>
            </div>
          </div>
      </div>
    </div>
    <!-- Slide Three - Set the background image for this slide in the line below -->
    <div id="carousel-item-" class="carousel-item fullscreen-carousel">
      <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
        <div class="container">
          <div class="row align-items-center justify-content-center">
              <h2 class="display-4 mb-2">Our food is seriously the bomb!</h2>
          </div>
          <div class="row align-items-center justify-content-center"> 
            <h3>What are you waiting for?</h3>
          </div>
          <div class=" mt-4 row align-items-center justify-content-center"> 
            <a class="btn btn-primary" href="tickets.html">
                Purchase Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
</div>
  `)


});