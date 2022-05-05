$(function () {
  $("p").hide().css({
    backgroundColor: "#333333",
    color: "white",
    padding: "16px",
  });

  $("h2")
    .css({ margin: 0, padding: "8px 0" })
    .click(function () {
      $(this).next().slideToggle(1000);
    });
});
