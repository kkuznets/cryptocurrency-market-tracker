localStorage.clear();
console.log(localStorage);

$(document).on("click", "button", function (event) {
  $(".userInfo").each(function () {
    var id = $(this).attr("name");
    var value = $(this).val();
    if (value === "") {
      return;
    }
    localStorage.setItem(id, value);
  });
  console.log(localStorage);

});



