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
  console.log(monthInput);
  console.log(dayInput);
}

function showBirth() {
  p.innerText = `${month.value}月${dayInput.value}日`;
}
