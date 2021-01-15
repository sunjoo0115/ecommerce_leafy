$(document).ready(function () {
  // banner owl carousel
  $("#banner-area .owl-carousel").owlCarousel({
    dots: false,
    nav: true,
    items: 1,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
  });
  // weekly best owl carousel
  $("#weekly-best .owl-carousel").owlCarousel({
    dots: true,
    items: 3,
    loop: true,
    margin: 10,
    // autoplay: true,
    // autoplayTimeout: 3000,
  });
  // monthly best owl carousel
  $("#monthly-best .owl-carousel").owlCarousel({
    dots: true,
    items: 3,
    loop: true,
    margin: 10,
    // autoplay: true,
    // autoplayTimeout: 3000,
  });
    // ranking display owl carousel
    $("#ranking-photo .owl-carousel").owlCarousel({
      dots: false,
      nav: false,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      margin: 0,
    });

    // ranking num owl carousel
    $("#ranking-num .owl-carousel").owlCarousel({
      dots: false,
      nav: false,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      margin: 0,
    });

});
