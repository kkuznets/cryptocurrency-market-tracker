$(document).ready(function() {
  function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

  $("#convertBtn").on("click", function() {
    if (!$(this).val()) {
      displayMessage("error", "Please enter a Number");
    }
    var input = $("#inputGroup")
      .find(":selected")
      .attr("value");
    var queryURL =
      "https://min-api.cryptocompare.com/data/price?fsym=" +
      input +
      "&tsyms=USD,EUR,AUD" +
      "&api_key=4032fc9713c205be9d015deab9bbbce1bb323fc207e32e773df9be829a3aa93f";
    $.ajax({
      url: queryURL,
      dataType: "json",
      method: "GET"
    }).then(function(response) {
      var selectedCurrency = $("#currencyList")
        .children("option:selected")
        .val();

      var coinAmount = parseFloat($("#btcInput").val());

      if (selectedCurrency == 1) {
        $("#currencyDisplay").val(parseFloat(response.USD) * coinAmount);
      } else if (selectedCurrency == 2) {
        $("#currencyDisplay").val(parseFloat(response.AUD) * coinAmount);
      } else if (selectedCurrency == 3) {
        $("#currencyDisplay").val(parseFloat(response.EUR) * coinAmount);
      }
    });
  });
});
