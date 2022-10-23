function rollDice(dice) {
  var randomNumber1 = Math.random();
  randomNumber1 = randomNumber1 * 6;
  randomNumber1 = randomNumber1 + 1;
  randomNumber1 = Math.floor(randomNumber1);
  document
    .querySelector(".img" + dice)
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  return randomNumber1;
}

function announceWiner() {
  let randomNumber1 = rollDice(1);
  let randomNumber2 = rollDice(2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins";
  }
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins 🚩";
  }
  if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent = "Draw 🎲";
  }
}

announceWiner();
