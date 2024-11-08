function ClickCounterGame() {
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
}
