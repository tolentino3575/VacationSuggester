$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var type = $("select#type").val();

    if (type === "history") {
      $('#london').hide();
      $('#london').show();
    } else if (type === "party") {
      $('#maui').hide();
      $('#maui').show();
    } else if (type === "culture") {
      $('#hk').hide();
      $('#hk').show();
    }

    event.preventDefault();
  });
});
