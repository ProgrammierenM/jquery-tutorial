$(function () {
  // jQuery AJAX - Asynchonous JavaScript and XML
  // HTML und JSON
  // Inhalt einer Datei vom Server laden und den Inhalt in ein Element schreiben
  $("div#output").load("demo.html");
  // Nur ein Element aus dem geladenen Inhalt verwenden
  $("div#output").load("demo.html #info");

  // Daten vom Server holen
  $.get(
    "demo.json",
    {
      id: 235,
    },
    function (data, status) {
      console.log(status, data);
    }
  );
  // Daten an Server via HTTP POST senden und empfangen
  $.post(
    "http://localhost:3000",
    {
      name: "Max",
    },
    function (data, status) {
      console.log(status, data);
    }
  );
  // Daten senden und holen
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      console.log(data.results[0]);
      let randomUser = data.results[0];
      $("#user").html(`<img src="${randomUser.picture.large}" />`);
    },
    error: function (error) {
      console.log(error);
    },
  });
});
