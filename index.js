function getRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function rollDice() {
  var randomNumber1 = getRandomNumber();
  var randomNumber2 = getRandomNumber();
  document
    .querySelector(".dice1")
    .setAttribute("src", `/images/dice${randomNumber1}.png`);
  document
    .querySelector(".dice2")
    .setAttribute("src", `/images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 win";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 win🚩";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}

document.querySelector(".btn").addEventListener("click", rollDice);
