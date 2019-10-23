import 'bootstrap/js/dist/carousel';

import img1 from "../img/food-table.jpg"
import img2 from "../img/grill.jpg"
import img3 from "../img/chips.jpg"

$(document).ready(function() {

  const carouselSlides = [
    {
      title: "hi",
      subtitle: "hello",
      img: img1
    },
    {
      title: "",
      subtitle: "",
      img: img2
    },
    {
      title: "",
      subtitle: "",
      img: img3
    }
  ]

  document.querySelector("#carousel-item-1").setAttribute("style", `background-image: url('${carouselSlides[0].img}')`)

  document.querySelector("#carousel-item-2").setAttribute("style", `background-image: url('${carouselSlides[0].img}')`)

  document.querySelector("#carousel-item-3").setAttribute("style", `background-image: url('${carouselSlides[0].img}')`)

});