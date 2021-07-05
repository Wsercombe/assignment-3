function processNumber(userNumber){
  let outputArray = [];
  let userNumberString;
  for (let i = 0; i <= userNumber; i++) {
    userNumberString = i.toString();
    if (userNumberString.includes("3")){
      outputArray.push("Won't you be my neighbor?");
    } else if (userNumberString.includes("2")) {
      outputArray.push("Boop!");
    } else if (userNumberString.includes("1")) {
      outputArray.push("Beep!");
    } else {
      outputArray.push(i);
    }
  }
  return outputArray;
}

function validateNumber(userNumber) {
  if (Number.isInteger(userNumber) && userNumber >= 0 && userNumber <= 100) {
    $(".invalid-text").hide();
    return true;
  } else {
    $(".invalid-text").show();
    $("#result-section").hide();
    return false;
  }
}
function resetCSS()
{
  $("#user-output").empty();
}

$(document).ready(function(event) {
  $("#number-beeper").submit(function(event) {
    resetCSS();

    const userNumber = parseInt($("#user-number").val());
    if (validateNumber(userNumber)) { 
      const outputArray = processNumber(userNumber);
      $("#result-section").show();
      let t = 0;
      arraySize = outputArray.length;
      setInterval(function () {
        if (t < arraySize - 1) {
          $("#user-output").append(outputArray[t] + ", ");
        } else {
          $("#user-output").append(outputArray[t]);
          $("#rogers").fadeIn("slow");
        }
        t += 1;
      },500);
    }


    event.preventDefault();
  });
});