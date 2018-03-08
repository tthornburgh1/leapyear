$(document).ready(function() {
  $("form#leap-year").submit(function(event) {

    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    var leapYear = function(year) {
      if (year % 100 === 0) {
        return false;
      } else if (year % 4 === 0) {
        return true;
      } else {
        return false;
      }

    $("#result").text(result);
    event.preventDefault();
  });
});
