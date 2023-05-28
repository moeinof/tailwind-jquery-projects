$(document).ready(function () {
  // next btn
  $("#next").click(function () {
    let index = $("#images img:not(.hidden)").index();
    $("#images img:not(.hidden)")
      .addClass("hidden")
      .next()
      .removeClass("hidden");
    if (index === $("#images img:last-child").index()) {
      $("#images img:first-child").removeClass("hidden");
    }
  });
  // prev btn
  $("#prev").click(function () {
    let index = $("#images img:not(.hidden)").index();
    $("#images img:not(.hidden)")
      .addClass("hidden")
      .prev()
      .removeClass("hidden");
    if (index === 0) {
      $("#images img:last-child").removeClass("hidden");
    }
  });

  // automate slider
  setInterval(function () {
    let index = $("#images img:not(.hidden)").index();
    $("#images img:not(.hidden)")
      .addClass("hidden")
      .next()
      .removeClass("hidden");
    if (index === $("#images img:last-child").index()) {
      $("#images img:first-child").removeClass("hidden");
    }
  }, 3000);
});
