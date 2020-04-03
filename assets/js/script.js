$(document).ready(function () {

  $("#convertBtn").on("click", function () {
    if (!$("#btcInput").val()) {
      $("#btcInput").attr("placeholder", "Please, fill out this field!");
      return;
    }
    var input = $("#inputGroup").find(":selected").attr("value");
    var output = $("#currencyList").find(":selected").attr("value");

    $.ajax({
      url: "https://min-api.cryptocompare.com/data/price?fsym=" +
        input +
        "&tsyms=" +
        output +
        "&api_key=4032fc9713c205be9d015deab9bbbce1bb323fc207e32e773df9be829a3aa93f",
      dataType: "json",
      method: "GET"
    }).then(function (response) {
      var selectedCurrency = $("#currencyList")
        .children("option:selected")
        .val();
      var coinAmount = parseFloat($("#btcInput").val());
      $("#currencyDisplay").val(parseFloat(response[output]) * coinAmount);
    });
  });

  $("#copyBtn").on("click", function () {
    var copyText = document.getElementById("currencyDisplay");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  });
});
