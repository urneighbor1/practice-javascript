// function ClickCounterGame() {
//   let count = 0;
//   const gameContainer = document.getElementById("game-container");

//   let counter = document.createElement("p");
//   counter.textContent = count;

//   let button1 = document.createElement("button");
//   button1.textContent = "+1ボタン";

//   button1.addEventListener("click", function () {
//     setCount(count + 1);
//   });

//   let button10 = document.createElement("button");
//   button10.textContent = "+10ボタン";

//   button10.addEventListener("click", function () {
//     setCount(count + 10);
//   });

//   let resetButton = document.createElement("button");
//   resetButton.textContent = "リセットボタン";

//   resetButton.addEventListener("click", function () {
//     setCount(0);
//   });

//   counter.addEventListener("click", function () {
//     setCount(0);
//   });

//   /**
//    * @param {number} value
//    * ```
//    * console.log(count) // 90

//    * setCount(count + 5);
//    * console.log(count) // 95

//    * setCount(count + 10);
//    * console.log(count) // 95
//    * ```
//    */
//   function setCount(value) {
//     if (value <= 100) {
//       count = value;
//       counter.textContent = count;
//     }
//   }

//   gameContainer.appendChild(button1);
//   gameContainer.appendChild(button10);
//   gameContainer.appendChild(resetButton);
//   gameContainer.appendChild(counter);
// }
// ClickCounterGame();

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

  let count = 0;
  const counter = document.createElement("p");

  const result = document.createElement("p");
  const judge = document.createElement("button");
  judge.textContent = "確認";
  judge.addEventListener("click", () => {
    const intValue = parseInt(input.value);

    count++;
    if (isNaN(intValue)) {
      count--;
      result.textContent = "数字を入力してね";
    } else if (intValue > randomNumber) {
      result.textContent = `${
        intValue - randomNumber <= 5 ? "惜しい！" : ""
      }もっと小さいよ`;
    } else if (intValue < randomNumber) {
      result.textContent = `${
        -(intValue - randomNumber) <= 5 ? "惜しい！" : ""
      }もっと大きいよ`;
    } else {
      // intValue === randomNumber
      result.textContent = "正解";
    }
    counter.textContent = `試行回数: ${count}`;
  });
  gameContainer.appendChild(judge);
  gameContainer.appendChild(result);
  gameContainer.appendChild(counter);
}

startNumberGuessGame();
