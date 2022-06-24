var correctAnswer = 50;
var startGame = prompt("Kindly Enter Your Name?");
console.log(startGame);

if (startGame) {
  var startResponse = alert(
    "Welcome " + startGame + ". Are You Ready To Start The Game Now[CLICK OK]?"
  );
  var gameInstruct = alert(
    "Welcome " +
      startGame +
      " Here is how this game works. You are to guess a number that is between 1 and 100 and sum of that number must also be below 10. ARE YOU READY TO START[CLICK OK]"
  );
  var trialOne = prompt(
    "[This is your first Trail] Question: WHAT IS THAT NUMBER?"
  );
  if (trialOne != correctAnswer) {
    var trialTwo = prompt(
      "[You are wrong! This is your Second Trail] Question: WHAT IS THAT NUMBER?"
    );
    if (trialTwo == correctAnswer) {
      alert("CONGRATULATION!😍 YOU ARE CORRECT!!!");
    } else if (trialTwo != correctAnswer) {
      var trialthree = prompt(
        "[You are wrong! This is your Third Trail] Question: WHAT IS THAT NUMBER?"
      );
      if (trialthree != correctAnswer) {
        alert(" YOU ARE WRONG!🤢 GAME OVER!!!");
      } else if (trialthree == correctAnswer) {
        alert("CONGRATULATION!😍 YOU ARE CORRECT!!!");
      }
    }
  } else if (trialOne == correctAnswer) {
    alert("CONGRATULATION!😍 YOU ARE CORRECT!!!");
  }
} else {
  alert("YOU RAN FROM THE GAME!!!🤢");
}
