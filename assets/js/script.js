function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

$(document).on("click", "button", function(event) {
  event.preventDefault();
  $('input[type="text"]').each(function() {
    var id = $(this).attr("id");
    var value = $(this).val();
    if (value !== "") {
      displayMessage("success", "Registered successfully");
    } else {
      displayMessage("error", "Enter value");
    }
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
