function ClickCounterGame() {
  let count = 0;
  const gameContainer = document.getElementById("game-container");

  let counter = document.createElement("p");
  counter.textContent = count;

  let button1 = document.createElement("button");
  button1.textContent = "+1ボタン";

  button1.addEventListener("click", function () {
    count++;
    counter.textContent = count;
  });

  let button10 = document.createElement("button");
  button10.textContent = "+10ボタン";

  button10.addEventListener("click", function () {
    count += 10;
    counter.textContent = count;
  });

  let resetButton = document.createElement("button");
  resetButton.textContent = "リセットボタン";

  resetButton.addEventListener("click", function () {
    count = 0;
    counter.textContent = 0;
  });

  counter.addEventListener("click", function () {
    count = 0;
    counter.textContent = 0;
  });

  gameContainer.appendChild(button1);
  gameContainer.appendChild(button10);
  gameContainer.appendChild(resetButton);
  gameContainer.appendChild(counter);
}

ClickCounterGame();
