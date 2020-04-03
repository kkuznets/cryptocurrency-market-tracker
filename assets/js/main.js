$(document).ready(function () {

  // Initialize animation on scroll API
  new WOW().init();

  // Initialize background animation (Vanta.js API)
  VANTA.NET({
    el: "#netBackground",
    mouseControls: true,
    touchControls: true,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xff9c6a,
    backgroundColor: 0x131722
  })

  // Convert Currencies Function
  $("#convertBtn").on("click", function () {
    if (!$("#currencyInput").val()) {
      $("#currencyOutput").val("");
      $("#currencyInput").attr("placeholder", "Please, fill out this field!");
      return;
    }
    var input = $("#currencyChoice").find(":selected").attr("value");
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
      var coinAmount = parseFloat($("#currencyInput").val());
      $("#currencyOutput").val(parseFloat(response[output]) * coinAmount);
    });
  });
  // !Convert Currencies Function

  // Copy Converted Results Function
  $("#copyBtn").on("click", function () {
    var copyText = document.getElementById("currencyOutput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  });
  // !Copy Converted Results Function


  // Generate and show additional info for each currency Function
  $(document).on("click", ".currency", function () {

    // Adding Elements to HMTL
    $("#mainInfo").empty();
    $("#mainInfo").append(`
    <div class="wow animated fadeIn">
          <div class="row">
            <p>
              <h1 class="invisible"> Nothing
              </h1>
            </p>
            <div class="col">
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-lg-3 my-auto text-center">
              <img id="img" src="imgSrc">
            </div>
            <div class="col-lg-4 my-auto mx-auto text-center">
              <p>
                <h2 id="coinTitle">
                </h2>
              </p>
            </div>
            <div class="col-lg-5 my-auto">
              <h4 id="fcasRating" class="align-middle"></h4>
              <h4 id="marketMaturity" class="align-middle"></h4>
              <h4 id="lastRefreshed" class="align-middle"></h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <!-- TradingView Widget BEGIN -->
              <div class="tradingview-widget-container pb-2" id="chart">

              </div>
              <!-- TradingView Widget END -->
            </div>
          </div>
    </div>`)

    //Generating Currency Name
    var currencyName = $(this).text();
    var coinTitle = document.getElementById("coinTitle");
    var coinSymbol = $(this).attr("id");
    var imgSrc = "assets/img/icons/color/" + coinSymbol + ".svg";
    coinTitle.innerHTML = currencyName + " (" + coinSymbol + ")";
    $("#img").attr({ src: imgSrc, width: "144rem", height: "144rem" });

    //Generating Health Index
    var queryURL =
      "https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=" + coinSymbol + "&apikey=JIS93MUHML1GONJ2";
    $.ajax({
      url: queryURL,
      dataType: "json",
      method: "GET"
    }).then(function (response) {
      healthRating = response;

      var fcasRating = document.getElementById("fcasRating");
      var marketMaturity = document.getElementById("marketMaturity");
      var lastRefreshed = document.getElementById("lastRefreshed");

      var fcasRatingValue = healthRating["Crypto Rating (FCAS)"]["3. fcas rating"];
      var marketMaturityValue = healthRating["Crypto Rating (FCAS)"]["6. market maturity score"];
      var lastRefreshedValue = healthRating["Crypto Rating (FCAS)"]["8. last refreshed"].split(" ")[0];


      fcasRating.innerHTML = "FCAS Rating: " + "<strong>" + fcasRatingValue + "</strong>";
      marketMaturity.innerHTML = "Market Maturity Score: " + "<strong>" + marketMaturityValue + "</strong>";
      lastRefreshed.innerHTML = "Last Refreshed: " + "<strong>" + lastRefreshedValue + "</strong>";
    });
    $("#chart").empty();
    $("#chart").append('<div id="tradingview_af9df" class="wow animated zoomIn"></div>')

    // Generating Stock Market Chart
    new TradingView.widget(
      {
        "autosize": true,
        "symbol": "CRYPTOCAP:" + coinSymbol,
        "interval": "1D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#333333",
        "enable_publishing": false,
        "hide_legend": false,
        "allow_symbol_change": false,
        "save_image": false,
        "container_id": "tradingview_af9df"
      }
    );
  });
  // Generate and show additional info for each currency Function
});
