function ClickCounterGame() {
  let count = 0;
  const gameContainer = document.getElementById("game-container");

  let counter = document.createElement("p");
  counter.textContent = count;

  let button1 = document.createElement("button");
  button1.textContent = "+1ボタン";

  button1.addEventListener("click", function () {
    setCount(count + 1);
  });

  let button10 = document.createElement("button");
  button10.textContent = "+10ボタン";

  button10.addEventListener("click", function () {
    setCount(count + 10);
  });

  let resetButton = document.createElement("button");
  resetButton.textContent = "リセットボタン";

  resetButton.addEventListener("click", function () {
    setCount(0);
  });

  counter.addEventListener("click", function () {
    setCount(0);
  });

  /**
   * @param {number} value
   * ```
   * console.log(count) // 90

   * setCount(count + 5);
   * console.log(count) // 95

   * setCount(count + 10);
   * console.log(count) // 95
   * ```
   */
  function setCount(value) {
    if (value <= 100) {
      count = value;
      counter.textContent = count;
    }
  }

  gameContainer.appendChild(button1);
  gameContainer.appendChild(button10);
  gameContainer.appendChild(resetButton);
  gameContainer.appendChild(counter);
}

ClickCounterGame();

function startNumberGuessGame() {
  const gameContainer = document.getElementById("game-container");

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const message = document.createElement("p");
  message.textContent = String(randomNumber);

  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "数字を入力してください (1 ~ 100)";
  input.min = 1;
  input.max = 100;

  

  gameContainer.appendChild(message);
  gameContainer.appendChild(input);
}

startNumberGuessGame();
