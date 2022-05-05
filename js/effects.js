$(function () {
  // jQuery Effects ---------------------------------------------------
  // Animiert width, height, padding, margin und opacity
  // Element anzeigen/verbergen je nach status
  $("div.test").toggle();
  // Element verbergen
  $("div.test").hide();
  // Element anzeigen
  $("div.test").show();
  // Element verbergen mit Zeitangabe
  $("div.test").hide(2000);
  // Element anzeigen mit Zeitangabe und Callback
  $("div.test").show(2000, function () {
    console.log("Fertig!");
  });

  // fade animiert nur opacity
  // Animation für das Anzeigen eines Elementes
  $("div.test").fadeIn();
  // Animation für das Verbergen eines Elementes
  $("div.test").fadeOut();
  // Animation für das Anzeigen/Verbergen eines Elementes je nach Status
  $("div.test").fadeToggle();
  // Animation zu einer bestimmten Sichtbarkeit (css opacity)
  $("div.test").fadeTo(1000, 0.5, function () {
    console.log("Fade Animation fertig");
  });

  // slide animiert height, padding-y und margin-y
  // Klappt ein Element auf von oben nach unten
  $("div.test").slideDown();
  // Klappt ein Element zu von unten nach oben
  $("div.test").slideUp(1000);
  // Klappt ein Element zu/auf je nach Status
  $("div.test").slideToggle(2000, function () {
    console.log("Slide Animation fertig");
  });

  // Alle CSS Eigenschaften animieren (Keine Farben! Plugin notwendig)
  // animate({params}, speed, callback)
  $("div.test2").animate({ padding: "16px", fontSize: "2rem" }, 1000);
});
