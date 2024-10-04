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
  console.log(`month: ${month}, day: ${day}`);
}

(() => {
  /** @type {HTMLSelectElement | null} */
  const monthSelect = document.getElementById("month-select");
  if (!monthSelect) throw Error("monthSelect");
  for (let i = 1; i <= 12; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    monthSelect.appendChild(option);
  }
  /** @type {HTMLSelectElement | null} */
  const daySelect = document.getElementById("day-select");
  if (!daySelect) throw Error("day-select");
  daySelect.append(
    ...Array(31)
      .fill(null)
      .map((_, i) => {
        const option = document.createElement("option");
        option.value = i + 1;
        option.textContent = i + 1;
        return option
      })
  );
})();
