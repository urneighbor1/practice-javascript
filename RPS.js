function RPS() {
  const choices = ["gu", "choki", "pa", "muteki"];
  // ↑ この書き方は、配列です。

  // const select = document.createElement("select");
  // const option1 = document.createElement("option");
  // option1.value = "gu";
  // option1.textContent = "gu";
  // select.appendChild(option1);
  // const option2 = document.createElement("option");
  // option2.value = "choki";
  // option2.textContent = "choki";
  // select.appendChild(option2);
  // const option3 = document.createElement("option");
  // option3.value = "pa";
  // option3.textContent = "pa";
  // select.appendChild(option3);

  const select = document.createElement("select");

  choices.forEach(choice => {
    const option = document.createElement("option");
    option.value = choice;
    option.textContent = choice;
    select.appendChild(option);
  });
  // foreach: 配列など複数のデータがあるもので使える。それぞれのデータを引数に関数を実行する

  gameContainer.appendChild(select);

  /* 
  select.append(
    ...choices.map(choice => {
      const option = document.createElement("option");
      option.value = choice;
      option.textContent = choice;
      return option;
    })
  );
 */

  const image = document.createElement("img");
  image.alt = "Choice";
  image.style.width = "100px";
  image.style.height = "100px";
  image.src =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";

  gameContainer.appendChild(image);
}
