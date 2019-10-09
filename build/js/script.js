$(document).ready(function() {
  /* search */

  $(".btn-search-toggle").click(function() {
    $(".search-toggle").toggleClass("open");
    $(".close-form").toggleClass("show");
  });

  /* sticky header */

  $(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 200) {
        $("body").addClass("sticky-header");
      } else {
        $("body").removeClass("sticky-header");
      }
    });
  });

  /* navbar */

  $(".navbar-toggler").click(function() {
    $(this).toggleClass("open");
  });

  /* carousel */

  $(".partners-carousel").owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 6
      },
      1200: {
        items: 7
      }
    }
  });

  $(".events-carousel").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      320: {
        items: 1,
        margin: 10
      },
      400: {
        items: 1,
        margin: -140
      }
    }
  });

  $(".review-carousel").owlCarousel({
    loop: true,
    margin: -635,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 1,
        margin: -635
      }
    }
  });
});
