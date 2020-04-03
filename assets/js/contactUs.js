// Initialize animation on scroll API
new WOW().init();

//Clear localStorage and show that it's clean to demonstrate correct performance of website
localStorage.clear();
console.log(localStorage);

//store user information into the localStorag and show it in console to demonstrate correct performance of website
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



