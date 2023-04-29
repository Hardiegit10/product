var count = 0;
const counter = document.getElementById("quantity");

function decrease() {
  count--;
  quantity.textContent = count;
}

function increase() {
  count++;
  quantity.textContent = count;
}
