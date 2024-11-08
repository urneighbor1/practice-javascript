function NumberGuessGame() {
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
}
