$(document).on("click", "button", function() {
  $('input[type="text"]').each(function() {
    var id = $(this).attr("id");
    var value = $(this).val();
    localStorage.setItem(id, value);
  });
});

$(document).on("click", "button", function() {
  $('textarea[type="text"]').each(function() {
    var id = $(this).attr("id");
    var value = $(this).val();
    localStorage.setItem(id, value);
  });
});
