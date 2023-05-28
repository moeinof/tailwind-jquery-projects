jQuery(function () {
  $("#menu-open").on("click", function () {
    $("#menu-open");
    $("#mobile-nav").slideToggle();
  });

  $(window).on("resize", function () {
    if ($(this).width() > 768) {
      $("#mobile-nav").hide();
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 100) {
      $("#nav-header").addClass("fixed top-0 left-0 w-full");
    } else {
      $("#nav-header").removeClass("fixed top-0 left-0 w-full");
    }
  });
});

// این تب پویا میباشد
