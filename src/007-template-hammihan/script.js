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
      .addClass("bg-red-500 text-white")
      .removeClass("hover:bg-slate-100 bg-white")
      .siblings()
      .removeClass("bg-red-500 text-white")
      .addClass("bg-white hover:bg-slate-100 text-black");

    let index = $(this).index();
    $("#tab-contents > div").slideUp().eq(index).slideDown();
  });
});
