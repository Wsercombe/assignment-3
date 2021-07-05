$(document).ready(function(event) {
  $("#number-beeper").submit(function(event) {
    const userNumber = parseInt($("#user-number").val());
    $("#result-section").show();
    $("#user-output").text(userNumber);

    event.preventDefault();
  });
});