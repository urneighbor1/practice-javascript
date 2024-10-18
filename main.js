/** @type {HTMLSelectElement | null} */
const gameSelector = document.getElementById("game-selector");
/** @type {HTMLDivElement | null} */
const gameContainer = document.getElementById("game-container");
if (!gameSelector || !gameContainer) throw new Error();

// 初期値
gameContainer.textContent = "ゲームを選ぶとここに表示されます";

gameSelector.addEventListener("change", function () {
  gameContainer.innerHTML = "";
  switch (gameSelector.value) {
    case "none":
      gameContainer.textContent = "ゲームを選ぶとここに表示されます";
      break;
    case "click-counter":
      clickCounterGame();
      break;
    case "number-guess":
      numberGuessGame();
      break;
    default:
      throw new Error(`Unknown value: ${gameSelector.value}`);
  }
});

// gameSelectorとgameContainerがnullでないことをIDEに知らせるために
// アロー関数を使う

const clickCounterGame = () => {
  let count = 0;

  const counter = document.createElement("p");
  counter.textContent = count;

  /**
   * @param {number} amount
   */
  function CountButton(amount) {
    const button = document.createElement("button");
    button.textContent = `${amount >= 0 ? "+" : ""}${amount}ボタン`;
    button.addEventListener("click", function () {
      count += amount;
      counter.textContent = count;
    });

    const p = document.createElement("p");
    p.appendChild(button);
    return p;
  }

  gameContainer.append(
    CountButton(1),
    CountButton(10),
    CountButton(100),
    CountButton(10000),
    CountButton(-11)
  );

  gameContainer.appendChild(counter);
};

const numberGuessGame = () => {
  const min = 1;
  const max = 100;

  const randomNumber = Math.floor(Math.random() * max) + min;
  console.log(randomNumber);

  const message = document.createElement("p");
  message.textContent = "数を当ててね";

  /**
   * @param {number} min
   * @param {number} max
   * @returns {Node}
   */
  const createNumberSelector = (min, max) => {
    const selector = document.createElement("select");
    const dummyOption = document.createElement("option");
    dummyOption.value = "none";
    dummyOption.textContent = "選択してください";

    const options = Array(max - min + 1)
      .fill(null)
      .map((_, index) => {
        const option = document.createElement("option");
        option.value = index + min;
        option.textContent = index + min;
        return option;
      });
    selector.append(dummyOption, ...options);
    return selector;
  };

  const numberSelector = createNumberSelector(min, max);
  numberSelector.addEventListener("change", () => {
    if (numberSelector.value === "none") {
      message.textContent = "選択してください";
    } else if (numberSelector.value == randomNumber) {
      message.textContent = "正解!";
    } else if (numberSelector.value < randomNumber) {
      message.textContent = "値はもっと大きいよ";
    } else {
      message.textContent = "値はもっと小さいよ";
    }
  });
  const selectorLabel = document.createElement("label");
  selectorLabel.textContent = "予想";
  selectorLabel.appendChild(numberSelector);

  gameContainer.append(message, selectorLabel);
};
