jQuery(function () {
  // $("#modal-btn").click(function () {});

  $("#modal-btn").on("click", function () {
    $("#modal-wrapper").fadeIn();
    $("#modal-body").animate({ marginTop: "0" });
  });

  $("#modal-close").on("click", function () {
    $("#modal-wrapper").fadeOut();
    $("#modal-body").animate({ marginTop: "-200px" });
  });

  $("#modal-actions > a").on("click", function () {
    $("#modal-wrapper").fadeOut();
    $("#modal-body").animate({ marginTop: "-200px" });
  });
});

// این تب پویا میباشد
