$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var history = $("select#history").val();
    var culture = $("select#culture").val();
    var food = $("select#food").val();
    var outdoor = $("select#outdoor").val();
    var beach = $("select#beach").val();


    if (history === "yesHistory") {
      $('#london').show();
    } else {
      $('#london').hide();
    }

    if (history === "yesHistory") {
      $('#london').show();
    } else {
      $('#london').hide();
    }

    event.preventDefault();
  });
});
