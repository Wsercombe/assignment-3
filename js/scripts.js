function processNumber(userNumber){
  let outputArray = [];
  let userNumberString;
  for (let i = 0; i <= userNumber; i++) {
    userNumberString = i.toString();
    if (userNumberString.includes("3")){
      outputArray.push("Won't you be my neighbor?");
    /*
    } else if (userNumberString.includes("2")) {
      outputArray.push("Boop");
    } else if (userNumberString.includes("1")) {
      outputArray.push("Beep");
    */
    } else {
      outputArray.push(i);
    }
  }
  return outputArray;
}




$(document).ready(function(event) {
  $("#number-beeper").submit(function(event) {
    const userNumber = parseInt($("#user-number").val());
    const outputArray = processNumber(userNumber);

    $("#result-section").show();
    $("#user-output").text(outputArray.join(", "));
  
    event.preventDefault();
  });
});