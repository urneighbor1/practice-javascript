document.getElementById("text").style.color = "red";

document.querySelector("h1").style.color = "red";

// document.getElementById("text").style.color = "red";
/* これは、ドキュメントの中の"text"というidを持つ
  最初に見つかったタグの文字色を"red"にする
*/

function changeColor() {
  document.getElementById("text").style.color = "green";
}

const countElement = document.getElementById("counter");

let count = 1;
function increaseCount() {
  count++;
  if (count > 5) {
    count = 1;
  }
  countElement.innerText = count;
}

function decreaseCount() {
  count--;
  if (count < 1) {
    count = 5;
  }
  countElement.innerText = count;
}

{
  // EventListener
  let counter_num = 1;
  const counterDisplay = document.createElement("p");
  counterDisplay.innerText = "1";

  const increaseCounter = document.createElement("button");
  increaseCounter.innerText = "増やすボタン";
  increaseCounter.addEventListener("click", () => {
    counter_num++;
    if (counter_num > 5) {
      counter_num = 1;
    }
    counterDisplay.innerText = counter_num;
  });

  const decreaseCounter = document.createElement("button");
  decreaseCounter.innerText = "減らすボタン";
  decreaseCounter.addEventListener("click", () => {
    counter_num--;
    if (counter_num < 1) {
      counter_num = 5;
    }
    counterDisplay.innerText = counter_num;
  });

  const div = document.createElement("div");
  div.append(increaseCounter, decreaseCounter, counterDisplay);
  document.body.appendChild(div);
}
