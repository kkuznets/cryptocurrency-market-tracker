$(document).ready(function() {
  $("#currencyList").on("change", function() {
    alert(
      $(this)
        .find("option:selected")
        .attr("id")
    );
  });
  $("#btcInput").keypress(function(event) {
    //event.preventDefault();
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      var queryURL =
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR,AUD" +
        "&api_key=4032fc9713c205be9d015deab9bbbce1bb323fc207e32e773df9be829a3aa93f";
      $.ajax({
        url: queryURL,
        dataType: "json",
        method: "GET"
      }).then(function(response) {
        console.log(response.USD);
        var one = parseInt($("#btcInput").val());
        // var currency = parseInt($("#currencyDisplay").val(response.USD * one));
        var target = $("#currencyList option:selected").val();
        if (target == "aud") {
          console.log(response.AUD);
        }
      });
    }
  });
});
