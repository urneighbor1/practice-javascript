function RPS() {
  const choices = ["gu", "choki", "pa"];

  const select = document.createElement("select");

  choices.forEach(choice => {
    const option = document.createElement("option");
    option.value = choice;
    option.textContent = choice;
    select.appendChild(option);
  });

  gameContainer.appendChild(select);
  const choiceButton = document.createElement("button");
  choiceButton.textContent = "決定";

  const humanImage = document.createElement("img");
  humanImage.alt = "Choice";
  humanImage.style.width = "100px";
  humanImage.style.height = "100px";

  const comHandImage = document.createElement("img");
  comHandImage.alt = "Choice";
  comHandImage.style.width = "100px";
  comHandImage.style.height = "100px";

  choiceButton.addEventListener("click", () => {
    const humanHand = select.value;
    switch (humanHand) {
      case "gu":
        humanImage.src =
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";
        break;
      case "choki":
        humanImage.src =
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s270/janken_choki.png";
        break;
      case "pa":
        humanImage.src =
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s290/janken_pa.png";
        break;
      default:
        break;
    }
    const comHand = choices[Math.floor(Math.random() * choices.length)];

    switch (comHand) {
      case "gu":
        comHandImage.src =
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";
        break;
      case "choki":
        comHandImage.src =
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s270/janken_choki.png";
        break;
      case "pa":
        comHandImage.src =
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s290/janken_pa.png";
        break;
      default:
        break;
    }
  });

  gameContainer.appendChild(choiceButton);
  gameContainer.appendChild(humanImage);
  gameContainer.appendChild(comHandImage);
}
