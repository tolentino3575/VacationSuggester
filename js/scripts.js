$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var history = $("select#history").val();
    var culture = $("select#culture").val();
    var food = $("select#food").val();
    var outdoor = $("select#outdoor").val();
    var beach = $("select#beach").val();


    if (history === "noHistory" && culture === "yesCulture" && food === "yesFood" && outdoor === "noOut" && beach === "noBeach") {
      $('#hk').show();
    } else if (history === "noHistory" && culture === "noCulture" && food === "yesFood" && outdoor === "yesOut" && beach === "yesBeach"){
      $('#maui').show();
    } else if (history === "yesHistory" && culture == "yesCulture" && food === "noFood" && outdoor === "noOut" && beach === "noBeach") {
      $('#london').show();
    }
    // QUESTION //
    else if (history === "yesHistory" && culture === "yesCulture" && food === "yesFood" && outdoor === "yesOut" && beach === "yesBeach"){
      $('#london').show();
    } else if (history === "yesHistory" && culture === "yesCulture" && food === "yesFood" && outdoor === "yesOut" && beach === "noBeach"){
      $('#hk').show();
    // } else if (history === "yesHistory" && culture == "yesCulture" && food === "noFood" && outdoor === "noOut" && beach === "noBeach") {
      $('#london').show();
    } else if (history === "yesHistory" && culture === "yesCulture" && food === "yesFood" && outdoor === "noOut" && beach === "noBeach"){
      $('#maui').show();
    } else if (history === "yesHistory" && culture === "noCulture" && food === "noFood" && outdoor === "noOut" && beach === "noBeach"){
      $('#london').show();
    } else if (history === "noHistory" && culture === "yesCulture" && food === "yesFood" && outdoor === "yesOut" && beach === "yesBeach"){
      $('#hk').show();
    } // else if (history === "noHistory" && culture === "noCulture" && food === "yesFood" && outdoor === "yesOut" && beach === "yesBeach"){
    //   $('#maui').show();
     else if (history === "noHistory" && culture === "noCulture" && food === "noFood" && outdoor === "yesOut" && beach === "yesBeach"){
      $('#london').show();
    } else if (history === "noHistory" && culture === "noCulture" && food === "noFood" && outdoor === "noOut" && beach === "yesBeach"){
      $('#hk').show();
    } else if (history === "noHistory" && culture === "noCulture" && food === "noFood" && outdoor === "noOut" && beach === "noBeach"){
      $('#maui').show();
    } else if (history === "yesHistory" && culture === "noCulture" && food === "yesFood" && outdoor === "yesOut" && beach === "yesBeach"){
      $('#london').show();
    } else if (history === "yesHistory" && culture === "noCulture" && food === "noFood" && outdoor === "yesOut" && beach === "yesBeach"){
      $('#hk').show();
    } else if (history === "yesHistory" && culture === "noCulture" && food === "noFood" && outdoor === "noOut" && beach === "yesBeach"){
      $('#maui').show();
    } else if (history === "yesHistory" && culture === "noCulture" && food === "yesFood" && outdoor === "noOut" && beach === "yesBeach"){
      $('#london').show();
    } else if (history === "noHistory" && culture === "yesCulture" && food === "noFood" && outdoor === "yesOut" && beach === "noBeach"){
      $('#hk').show();
    } else if (history === "noHistory" && culture === "yesCulture" && food === "yesFood" && outdoor === "yesOut" && beach === "noBeach"){
      $('#maui').show();
    }
    // QUESTION //


    // if (history === "yesHistory") {
    //   $('#london').show();
    // } else if (culture === "noCulture") {
    //   $('#london').show();
    // } else if (food === "yesFood") {
    //   $('#hk').show();
    // } else if (outdoor === "noOut") {
    //   $('#hk').show();
    // } else {
    //   $('#maui').show();
    // }



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
