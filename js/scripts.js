$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var type = $("select#type").val();

    if (type === "party") {
      $('#maui').show();
    } 


  });

  event.preventDefault();
});
