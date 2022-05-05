// jQuery - kleines Beispiel mit eine Einkaufsliste
$(function () {
  $("#addItem").click((event) => {
    event.preventDefault();
    let newItem = $("#newItem").val().trim();
    if (newItem) {
      let id = Date.now();
      //$(".cart").append("<li id='" + uid + "'>" + newItem + "</li>");
      $("ul.cart").append(`<li id="${id}">${newItem}</li>`);
      $("#" + id).click(removeItem);
    }
    $("#newItem").val("");
  });

  $("li").click(removeItem);

  function removeItem() {
    $(this).remove();
  }
});
