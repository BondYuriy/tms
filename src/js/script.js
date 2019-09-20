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
});
