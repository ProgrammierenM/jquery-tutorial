// Syntax
//$(selector).action()

// Wenn gesamtes Dokument bereit ist
$(document).ready(function () {
  // ...
});

// Kürzere Version von Document Ready
$(function () {
  // Selector -----------------------------------------------------------
  // Alle Elemente
  $("*");
  // Alle Elemente mit diesem Tag
  $("p");
  // Alle Elemente von diesem Typ mit dieser CSS Klasse
  $("p.info");
  // Das erste Elemente mit diesem Tag
  $("p:first");
  // Alle li Elemente welche sich direkt unter dem ul element befinden
  $("ul.cart > li");
  // Das erste li von jedem ul
  $("ul.cart li:first-child");
  // Jedes Element mit diesem Attribut
  $("[href]");
  // Jedes Element mit diesem Attribut und Value
  $("a [target='_blank']");
  // Das Element mit dieser id
  $("#id");
  // Alle Elemente mit dieser CSS Klasse
  $(".class");

  // jQuery Traversing ---------------------------------------------------
  // Nächstes Element in der DOM Strukur selektieren
  $("div.test").next();
  // Element davor selektieren
  $("div.test").prev();
  // Das Elternelement selektieren
  $("div.test").parent();
  // Alle Kindelemente selektieren
  $("div.test").children();
  // Nach einem bestimmten Kindelement suchen und selektieren
  $("div.test").find("span");

  // jQuery DOM Manipulation ---------------------------------------------
  // SET
  // Schreibt Text in dieses Element
  $("div.test").text("Hallo Welt");
  // Schreibt HTML samt Inhalt in dieses Element
  $("div.test").html("<button>Drück mich!</button>");
  // Schreibt ein Attribute in das selektierte Element
  $("div.test").attr("banane", true);
  // Schreibt Text in ein Input Feld
  $("input.test").val("Nix reinschreiben!");

  // GET
  // Gibt den Inhalt des Elementes zurück
  $("div.test").text();
  // Gibt den Inhalt inkl. HTML Markup zurück
  $("div.test").html();
  // Gibt das Attribut des selektierten Elementes zurück
  $("div.test").attr("banane");
  // Gibt den Wert eines Input Feldes zurück
  $("input.test").val();

  // ADD
  // Fügt Inhalt ans Ende des Elementes ein
  $("div.test").append("<br> Am Ende");
  // Fügt Inhalt an den Anfang des Elementes ein
  $("div.test").prepend("Am Anfang <br>");
  // Fügt Inhalt vor diesem Element ein
  $("div.test").before("<h2>Über diesem div Element</h2>");
  // Fügt Inhalt nach diesem Element ein
  $("div.test").after("<h2>Unter diesem div Element</h2>");

  // Bei before und after können beliebig viele ELemente angegeben werden
  let ele1 = "<p>Hallo</p>";
  let ele2 = "<p>wie</p>";
  let ele3 = "<p>geht's</p>";
  $("div.test").after(ele1, ele2, ele3);

  // REMOVE
  // Leert den gesamten Inhalt des Elementes
  $("div.test").empty();
  // Löscht das ELement samt Inhalt
  $("div.test").remove();

  // jQuery CSS Manipulation ---------------------------------------------
  // CSS Classes
  // Fügt eine CSS Klasse bei den selektieren Elementen an
  $("div.test").addClass("blue info");
  // Entfernt eine CSS Klasse von den selektieren Elementen
  $("div.test").removeClass("info blue");
  // Je nach Status wird eine CSS Klasse hinzugefügt oder entfernt
  $("div.test").toggleClass("blue");

  // Gibt die CSS Eigenschaften vom ersten selektierten Element zurück
  $("div.test").css("width");
  // Setzt eine CSS Eigenschaft
  $("div.test").css("color", "white");
  // Mehrere CSS Eigenschaften setzen
  $("div.test").css({ border: "2px solid black", fontSize: "2rem" });

  // jQuery Dimensions Methods ------------------------------------------
  // Gibt die Breite des Elementes zurück
  $("div.test").width();
  // Gibt die Höhe des Elementes zurück
  $("div.test").height();
  // gibt die Breite des Elementes + Padding zurück
  $("div.test").innerWidth();
  // gibt die Höhe des Elementes + Padding zurück
  $("div.test").innerHeight();
  // gibt die Breite des Elementes + Padding + Border zurück
  $("div.test").outerWidth();
  // gibt die Höhe des Elementes + Padding + Border zurück
  $("div.test").outerHeight();
  // gibt die Breite des Elementes + Padding + Border + Margin zurück
  $("div.test").outerWidth(true);
  // gibt die Höhe des Elementes + Padding + Border + Margin zurück
  $("div.test").outerHeight(true);

  // jQuery Events --------------------------------------------------------
  $("div.test button").click(function () {
    //$("div.test").toggleClass("blue");
    $(this).parent().toggleClass("blue");
  });
  $("div.special").dblclick(function () {
    //...
  });
  // Event welches ausgelöst wird wenn du mit der Maus über dem Element bist
  $("div.special").mouseenter(function () {
    //...
  });
  // Event welches ausgelöst wird wenn du mit der Maus das Element verlässt
  $("div.special").mouseleave(function () {
    //...
  });
  // Event wenn ein formular abgeschickt wird
  $("form").submit(function (event) {
    event.preventDefault();
    //...
  });
  // Event welches mouseenter und mouseleave vereint
  $("h2").hover(
    function () {
      $(this).css("background-color", "rebeccapurple");
    },
    function () {
      $(this).css("background-color", "white");
    }
  );
  // Events mit on verwenden
  $("p").on("click", function () {
    $(this).css("background-color", "rebeccapurple");
  });
  // Mehrere Events mit on verwenden
  $("p").on({
    click: function () {
      $(this).css("background-color", "rebeccapurple");
    },
    dblclick: function () {
      $(this).css("background-color", "red");
    },
  });

  // jQuery allgemeine Funktionen ---------------------------------------
  // Schleife
  $("p").each(function (key, element) {
    console.log(key, $(element).text());
  });
  // den index eines Elementes ermitteln
  $("p").click(function () {
    console.log($(this).index());
  });
  // slektierte Elemente zu einem Array konvertieren
  $("p").toArray();
});
