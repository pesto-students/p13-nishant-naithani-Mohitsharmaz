let timesGussed = 0;
let guessValue;

let ANSWER = Math.random() * 100;
ANSWER = Math.trunc(ANSWER);
for (let i = 0; i < 10; i++) {
  // return;
  console.log("math", ANSWER);

  if (guessValue && guessValue < ANSWER) {
    guessValue = prompt(`${guessValue} is Too Small`);
  } else if (guessValue && guessValue > ANSWER) {
    guessValue = prompt(`${guessValue} is Too Large`);
  } else {
    guessValue = prompt("Guess A Number Between 1-100");
  }
  if (guessValue == ANSWER) {
    alert(`Congrats you won::: in ${i + 1} times`);
    break;
  }

  console.log("guess value is here", guessValue);
}
