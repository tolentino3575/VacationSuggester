$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var history = $("select#history").val();
    var culture = $("select#culture").val();
    var food = $("select#food").val();
    var outdoor = $("select#outdoor").val();
    var beach = $("select#beach").val();


    if (history === "yesHistory") {
      $('#london').show();
    } else if (history === "noHistory") {
      $('#hk').show();
    } else if (culture === "yesCulture") {
      $('#maui').show();
    } else if (culture === "noCulture") {
      $('#hk').show();
    } else if (food === "yesFood") {
      $('#hk').show();
    } else if (food === "noFood") {
      $('#london').show();
    } else if (outdoor === "yesOut") {
      $('#hk').show();
    } else if (outdoor === "noOut") {
      $('#maui').show();
    } else if (beach === "yesBeach") {
      $('#hk').show();
    } else if (outdoor === "noBeach") {
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
