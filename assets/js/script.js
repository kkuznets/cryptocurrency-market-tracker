$(document).ready(function() {
  $(searchBtn).on("click", function() {
    event.preventDefault();
    alert("clicked");

    var queryURL =
      "https://api.nomics.com/v1/markets?" +
      "key=cc8e4bc4be02800a1766ad62300c076b";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  });
});
