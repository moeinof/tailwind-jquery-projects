jQuery(function () {
  // navbar functions

  $("#menu-open").on("click", function () {
    $("#menu-open");
    $("#mobile-nav").slideToggle();
  });

  $(window).on("resize", function () {
    if ($(this).width() > 768) {
      $("#mobile-nav").hide();
    }
  });

  // modal functions

  $("#search-modal").on("click", function () {
    $("#modal-wrapper").fadeIn();
    $("#modal-body").animate({ marginTop: "0" });
  });

  $("#modal-close").on("click", function () {
    $("#modal-wrapper").fadeOut();
    $("#modal-body").animate({ marginTop: "-200px" });
  });

  // accordion #1
  $("#tab-heading div").on("click", function (e) {
    $(this)
      .addClass("bg-yellow-500")
      .siblings()
      .removeClass("bg-yellow-500")
      .addClass("bg-sky-700");

    let index = $(this).index();
    $("#tab-contents div").slideUp().eq(index).slideDown();
  });
});
