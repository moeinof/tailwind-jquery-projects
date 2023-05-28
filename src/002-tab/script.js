$(document).ready(function () {
  $("#tab-heading div").click(function (e) {
    $(this)
      .addClass("bg-cyan-500 text-white")
      .siblings()
      .removeClass("bg-cyan-500 text-white");

    let index = $(this).index();
    $("#tab-contents p").slideUp().eq(index).slideDown();
  });
});

// این تب پویا میباشد
