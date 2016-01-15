$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var history = $("select#history").val();
    var culture = $("select#culture").val();
    var food = $("select#food").val();
    var outdoor = $("select#outdoor").val();
    var beach = $("select#beach").val();


    if (history === "yesHistory") {
      $('#london').show();
    } else if (culture === "noCulture") {
      $('#london').show();
    } else if (food === "yesFood") {
      $('#hk').show();
    } else if (outdoor === "noOut") {
      $('#hk').show();
    } else {
      $('#maui').show();
    }



    //  if (culture === "yesCulture") {
    //    $('#hk').show();
    //  } else {
    //    $('#hk').hide();
    //  }
     //
    //  if (beach === "yesBeach") {
    //    $('#maui').show();
    //  } else {
    //    $('#maui').hide();
    //  }

    event.preventDefault();
  });
});
