$(document).ready(function() {
  /* $("#currencyList").on("change", function() {
    alert(
      $(this)
        .find("option:selected")
        .attr("id")
    );
  });*/
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
        var selectedCurrency = $("#currencyList")
          .children("option:selected")
          .val();

        //console.log(response.USD);
        var coinAmount = parseFloat($("#btcInput").val());
        if (selectedCurrency == 1) {
          //usdValue = parseInt(response.USD);
          $("#currencyDisplay").val(parseFloat(response.USD) * coinAmount);
        } else if (selectedCurrency == 2) {
          $("#currencyDisplay").val(parseFloat(response.AUD) * coinAmount);
        } else {
          $("#currencyDisplay").val(parseFloat(response.EUR) * coinAmount);
        }
      });
    }
  });
});
