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

// Initialize and add the map
function initMap() {
  // The location of Sydney
  var sydney = { lat: -33.865143, lng: 151.2099 };
  // The map, centered at Sydney
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: sydney
  });
  // The marker, positioned at Sydney
  var marker = new google.maps.Marker({
    position: sydney,
    map: map
  });
}
