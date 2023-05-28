jQuery(function () {
  $("#to-top-btn").on("click", function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 500) {
      $("#to-top-btn").fadeIn();
    } else {
      $("#to-top-btn").fadeOut();
    }
  });
});

// این تب پویا میباشد
