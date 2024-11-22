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
      ClickCounterGame();
      break;
    case "number-guess":
      NumberGuessGame();
      break;
    case "rps":
      RPS();
      break;
    default:
      throw new Error(`Unknown value: ${gameSelector.value}`);
  }
});
