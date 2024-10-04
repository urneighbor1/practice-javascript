/*
  JavaScriptのプログラムとHTMLのタグはどこで対応しているか
  タグについているidで持ってこれる
  タグの中にある付加情報のことを属性という
  console.log()はC言語でいうところのprintf()のようなもの
*/
/** @type {HTMLInputElement} */
const monthInput = document.getElementById("month");
/** @type {HTMLInputElement} */
const dayInput = document.getElementById("day");

const p = document.createElement("p");
document.body.appendChild(p);

function errorCheck() {
  const month = monthInput.value;
  const day = dayInput.value;
  if (/* isNaN(month) || */ !(1 <= month && month <= 12)) {
    alert("適切な値ではありません");
    return;
  }
  /*
  const date = new Date(2000, month - 1, day);
  if (date.getMonth() + 1 != month || date.getDate() != day) {
    alert("適切な値ではありません");
    return;
  }
    */
  console.log(`month: ${monthInput.value}, day: ${dayInput.value}`);
}

function showBirth() {
  p.innerText = `${monthInput.value}月${dayInput.value}日`;
}
